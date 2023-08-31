import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { options } from './config';
import { STRATEGIES } from './strategies';
import { GUARDS } from './guards';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.registerAsync(options()),
    HttpModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, ...STRATEGIES, ...GUARDS],
})
export class AuthModule {}
