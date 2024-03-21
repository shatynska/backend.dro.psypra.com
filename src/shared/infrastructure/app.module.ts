import { JwtAuthGuard } from '@auth/guards/jwt-auth.guard';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
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
  ],
})
export class AppModule {}
