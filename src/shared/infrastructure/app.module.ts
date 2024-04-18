import { JwtAuthGuard } from '@auth/guards/jwt-auth.guard';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { ZodValidationPipe } from 'nestjs-zod';
import { SpecialistsProfilesModule } from 'src/specialists-profiles/specialists-profiles.module';
import { WebsiteContentModule } from 'src/website-content/website-content.module';
import { CashBooksModule } from '~/cash-books/infrastructure/cash-books.module';
import { PrismaModule } from '~/shared/infrastructure/prisma/prisma.module';
import { AuthModule } from '../../auth/auth.module';
import { UsersModule } from '../../users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    CashBooksModule,
    WebsiteContentModule,
    PrismaModule,
    AuthModule,
    SpecialistsProfilesModule,
    ThrottlerModule.forRoot([
      {
        ttl: 6000,
        limit: 10,
      },
    ]),
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}
