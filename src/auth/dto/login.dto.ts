import { PickType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { User } from '../../prisma/entities/user.entity';

export class LoginDto extends PickType(User, ['email', 'password'] as const) {
  email: string;

  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  password: string;
}
