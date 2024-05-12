import { JwtAuthGuard } from '@auth/guards/jwt-auth.guard';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { ZodValidationPipe } from 'nestjs-zod';
import { AuthModule } from './auth/auth.module';
import { OrganizationBookkeepingModule } from './organization-bookkeeping/organization-bookkeeping.module';
import { PrismaModule } from './shared/infrastructure/prisma/prisma.module';
import { SpecialistsProfilesModule } from './specialists-profiles/specialists-profiles.module';
import { UsersModule } from './users/users.module';
import { WebsiteContentModule } from './website-content/website-content.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UsersModule,
    WebsiteContentModule,
    SpecialistsProfilesModule,
    OrganizationBookkeepingModule,
    PrismaModule,
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
