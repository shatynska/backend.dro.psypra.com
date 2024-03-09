import { JwtPayload } from '@auth/interfaces';
import { convertToSecondsUtil } from '@common/utils';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Role, User } from '@prisma/client';
import { genSaltSync, hashSync } from 'bcrypt';
import { Cache } from 'cache-manager';
import { PrismaService } from '~/shared/infrastructure/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly configService: ConfigService,
  ) {}

  async save(user: Partial<User>) {
    const hashedPassword = user?.password
      ? this.hashPassword(user.password)
      : null;
    const savedUser = await this.prismaService.user.upsert({
      where: {
        userName: user.userName,
      },
      update: {
        email: user?.email ?? undefined,
        phone: user?.phone ?? undefined,
        password: hashedPassword ?? undefined,
        provider: user?.provider ?? undefined,
        roles: user?.roles ?? undefined,
      },
      create: {
        userName: user.userName,
        email: undefined,
        phone: undefined,
        password: hashedPassword,
        provider: user?.provider,
        roles: ['USER'],
      },
    });
    await this.cacheManager.set(savedUser.id, savedUser);
    await this.cacheManager.set(savedUser.userName, savedUser);
    await this.cacheManager.set(savedUser.email, savedUser);
    await this.cacheManager.set(savedUser.phone, savedUser);
    return savedUser;
  }

  async findOne(identifier: string, isReset = false): Promise<User> {
    if (isReset) {
      await this.cacheManager.del(identifier);
    }
    const user = await this.cacheManager.get<User>(identifier);
    if (!user) {
      const user = await this.prismaService.user.findFirst({
        where: {
          OR: [
            { id: identifier },
            { userName: identifier },
            { email: identifier },
            { phone: identifier },
          ],
        },
      });
      if (!user) {
        return null;
      }
      await this.cacheManager.set(
        identifier,
        user,
        convertToSecondsUtil(this.configService.get('JWT_EXP')),
      );
      return user;
    }
    return user;
  }

  async remove(id: string, user: JwtPayload) {
    if (user.id != id && !user.roles.includes(Role.ADMIN)) {
      throw new ForbiddenException();
    }
    await Promise.all([
      this.cacheManager.del(id),
      this.cacheManager.del(user.userName),
      this.cacheManager.del(user.email),
      this.cacheManager.del(user.phone),
    ]);
    return this.prismaService.user.delete({
      where: { id },
      select: { id: true },
    });
  }

  private hashPassword(password: string) {
    return hashSync(password, genSaltSync(10));
  }
}
