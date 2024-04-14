import { Provider, Token, User } from '.prisma/client';
import {
  BadRequestException,
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { add } from 'date-fns';
import { UsersService } from 'src/users/users.service';
import { v4 } from 'uuid';
import { PrismaService } from '~/shared/infrastructure/prisma/prisma.service';
import { LoginDto, RegisterDto } from './dto';
import { Tokens } from './interfaces';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly prismaService: PrismaService,
  ) {}

  async refreshTokens(refreshToken: string, agent: string): Promise<Tokens> {
    const token = await this.prismaService.token.findUnique({
      where: { token: refreshToken },
    });
    if (!token) {
      throw new UnauthorizedException();
    }
    await this.prismaService.token.delete({
      where: { token: refreshToken },
    });
    if (new Date(token.exp) < new Date()) {
      throw new UnauthorizedException();
    }
    const user = await this.usersService.findOne(token.userId);
    if (!user) throw new NotFoundException();
    return this.generateTokens(user, agent);
  }

  async register(dto: RegisterDto) {
    const user: User | null = await this.usersService
      .findOne(dto.userName)
      .catch((err) => {
        this.logger.error(err);
        return null;
      });
    if (user) {
      throw new ConflictException(
        'User with this username is already registered',
      );
    }
    return this.usersService.save(dto).catch((err) => {
      this.logger.error(err);
      return null;
    });
  }

  async login(dto: LoginDto, agent: string): Promise<Tokens> {
    const user: User | null = await this.usersService
      .findOne(dto.identifier, true)
      .catch((err) => {
        this.logger.error(err);
        return null;
      });
    if (!user || (user.password && !compareSync(dto.password, user.password))) {
      throw new UnauthorizedException('Wrong login or password');
    }
    return this.generateTokens(user, agent);
  }

  private async generateTokens(user: User, agent: string): Promise<Tokens> {
    const accessToken =
      'Bearer ' +
      this.jwtService.sign({
        id: user.id,
        userName: user.userName,
        email: user.email,
        phone: user.phone,
        roles: user.roles,
      });

    const refreshToken = await this.getRefreshToken(user.id, agent);
    return { accessToken, refreshToken };
  }

  private async getRefreshToken(userId: string, agent: string): Promise<Token> {
    const _token = await this.prismaService.token.findFirst({
      where: {
        userId,
        userAgent: agent,
      },
    });
    const token = _token?.token ?? '';
    return this.prismaService.token.upsert({
      where: { token },
      update: {
        token: v4(),
        exp: add(new Date(), { months: 1 }),
      },
      create: {
        token: v4(),
        exp: add(new Date(), { months: 1 }),
        userId,
        userAgent: agent,
      },
    });
  }

  deleteRefreshToken(token: string) {
    return this.prismaService.token.delete({ where: { token } });
  }

  async providerAuth(email: string, agent: string, provider: Provider) {
    const userExists = await this.usersService.findOne(email);
    if (userExists) {
      const user = await this.usersService
        .save({ email, provider })
        .catch((err) => {
          this.logger.error(err);
          return null;
        });
      if (!user) throw new BadRequestException();
      return this.generateTokens(user, agent);
    }
    const user = await this.usersService
      .save({ email, provider })
      .catch((err) => {
        this.logger.error(err);
        return null;
      });
    if (!user) {
      throw new HttpException(
        `Unable to create user with email ${email} in Google auth`,
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.generateTokens(user, agent);
  }
}
