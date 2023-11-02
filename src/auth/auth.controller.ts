import {
  ApiErrorDecorator,
  Cookie,
  Public,
  UserAgent,
} from '@common/decorators';
import { handleTimeoutAndErrors } from '@common/helpers';
import { HttpService } from '@nestjs/axios';
import {
  BadRequestException,
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpStatus,
  Post,
  Query,
  Req,
  Res,
  UnauthorizedException,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Provider } from '@prisma/client';
import { Request, Response } from 'express';
import { map, mergeMap } from 'rxjs';
import { UserResponseDto } from 'src/users/dto';
import { AuthService } from './auth.service';
import { LoginDto, LoginResponseDto, RegisterDto } from './dto';
import { GoogleGuard } from './guards/google.guard';
import { Tokens } from './interfaces';

const REFRESH_TOKEN = 'refreshtoken';

@Controller('auth')
@Public()
@ApiTags('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  @Post('register')
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOperation({
    summary: 'Register user',
  })
  @ApiResponse({
    status: 201,
    type: UserResponseDto,
  })
  @ApiErrorDecorator(HttpStatus.BAD_REQUEST, 'Bad Request')
  @ApiErrorDecorator(
    HttpStatus.CONFLICT,
    'User with this email is already registered',
  )
  async register(@Body() dto: RegisterDto) {
    const user = await this.authService.register(dto);
    if (!user) {
      throw new BadRequestException(
        `Unable to register user with data ${JSON.stringify(dto)}`,
      );
    }
    return new UserResponseDto(user);
  }

  @Post('login')
  @ApiOperation({
    summary: 'Login user',
  })
  @ApiResponse({
    status: 201,
    type: LoginResponseDto,
  })
  @ApiErrorDecorator(HttpStatus.BAD_REQUEST, 'Unable to login')
  @ApiErrorDecorator(HttpStatus.UNAUTHORIZED, 'Wrong login or password')
  async login(
    @Body() dto: LoginDto,
    @Res() res: Response,
    @UserAgent() agent: string,
  ) {
    const tokens = await this.authService.login(dto, agent);
    if (!tokens) {
      throw new BadRequestException(
        `Unable to login with data ${JSON.stringify(dto)}`,
      );
    }
    this.setRefreshTokenToCookies(tokens, res);
  }

  @ApiOperation({
    summary: 'Logout user',
  })
  @ApiResponse({
    status: 200,
  })
  @Get('logout')
  async logout(
    @Cookie(REFRESH_TOKEN) refreshToken: string,
    @Res() res: Response,
  ) {
    if (!refreshToken) {
      res.sendStatus(HttpStatus.OK);
      return;
    }
    await this.authService.deleteRefreshToken(refreshToken);
    res.cookie(REFRESH_TOKEN, '', {
      httpOnly: true,
      secure: true,
      expires: new Date(),
    });
    res.sendStatus(HttpStatus.OK);
  }

  @Get('refresh-tokens')
  async refreshTokens(
    @Cookie(REFRESH_TOKEN) refreshToken: string,
    @Res() res: Response,
    @UserAgent() agent: string,
  ) {
    if (!refreshToken) {
      throw new UnauthorizedException();
    }
    const tokens = await this.authService.refreshTokens(refreshToken, agent);
    if (!tokens) {
      throw new UnauthorizedException();
    }
    this.setRefreshTokenToCookies(tokens, res);
  }

  private setRefreshTokenToCookies(tokens: Tokens, res: Response) {
    if (!tokens) {
      throw new UnauthorizedException();
    }
    res.cookie(REFRESH_TOKEN, tokens.refreshToken.token, {
      httpOnly: true,
      sameSite: 'lax',
      expires: new Date(tokens.refreshToken.exp),
      secure:
        this.configService.get('NODE_ENV', 'development') === 'production',
      path: '/',
    });
    res.status(HttpStatus.CREATED).json({ accessToken: tokens.accessToken });
  }

  @UseGuards(GoogleGuard)
  @Get('google')
  googleAuth() {}

  @UseGuards(GoogleGuard)
  @Get('google/callback')
  googleAuthCallback(@Req() req: Request, @Res() res: Response) {
    const token = req.user['accessToken'];
    res.redirect(
      `${this.configService.get('API_URL')}/auth/success-google?token=${token}`,
    );
  }

  @Get('success-google')
  successGoogle(
    @Query('token') token: string,
    @UserAgent() agent: string,
    @Res() res: Response,
  ) {
    return this.httpService
      .get(
        `https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${token}`,
      )
      .pipe(
        mergeMap(({ data: { email } }) =>
          this.authService.providerAuth(email, agent, Provider.GOOGLE),
        ),
        map((data) => this.setRefreshTokenToCookies(data, res)),
        handleTimeoutAndErrors(),
      );
  }

  @Get('cash-books')
  getCashBooks() {
    return {
      cashBooksList: [2023, 2024],
      currentCashBook: {
        year: 2023,
        cashBalance: 5410,
        reportingMonths: [10, 9, 7, 6, 5],
        membersWithMembershipFees: [
          {
            name: 'Берчук Володимир',
            membershipFees: [
              [10, 200],
              [9, 200],
              [7, 200],
              [6, 200],
            ],
          },
          {
            name: 'Білас Юлія',
            membershipFees: [
              [10, 200],
              [9, 200],
              [7, 200],
            ],
          },
          {
            name: 'Гамбарова Еляна',
            membershipFees: [
              [10, 200],
              [9, 200],
              [7, 200],
            ],
          },
          {
            name: 'Дробчак Ольга',
            membershipFees: [
              [10, 200],
              [9, 200],
              [7, 200],
              [6, 200],
              [5, 200],
            ],
          },
          {
            name: 'Коцюба Галина',
            membershipFees: [
              [6, 200],
              [5, 500],
            ],
          },
          {
            name: 'Лех Наталія',
            membershipFees: [
              [10, 200],
              [9, 200],
              [7, 200],
              [6, 200],
              [5, 200],
            ],
          },
          {
            name: 'Некрасова Валентина',
            membershipFees: [
              [10, 200],
              [9, 200],
              [7, 200],
              [6, 200],
              [5, 200],
            ],
          },
          {
            name: 'Петришин Ольга',
            membershipFees: [
              [9, 200],
              [7, 200],
              [6, 200],
              [5, 200],
            ],
          },
          {
            name: 'Созанська Ірина',
            membershipFees: [
              [10, 200],
              [9, 200],
              [7, 200],
              [6, 200],
              [5, 200],
            ],
          },
          {
            name: 'Татаревич Галина',
            membershipFees: [[10, 200]],
          },
          {
            name: 'Франчук Тетяна',
            membershipFees: [[7, 200]],
          },
          {
            name: 'Чапля Уляна',
            membershipFees: [
              [10, 200],
              [9, 200],
              [7, 200],
              [6, 200],
              [5, 200],
            ],
          },
          {
            name: 'Шатинська Альона',
            membershipFees: [
              [10, 200],
              [9, 200],
              [7, 200],
              [6, 200],
              [5, 200],
            ],
          },
        ],
        expenses: [
          { id: '1', date: '2029', amount: 45000, details: 'Піца' },
          { id: '2', date: '2029', amount: 19000, details: 'Алкоголь' },
          { id: '3', date: '2025', amount: 45000, details: 'Піца' },
        ],
      },
    };
  }
}
