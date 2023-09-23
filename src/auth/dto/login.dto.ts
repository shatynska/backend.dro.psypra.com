import { PickType } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { User } from '../../prisma/entities/user.entity';

export class LoginDto extends PickType(User, ['email', 'password'] as const) {
  email: string;

  @IsNotEmpty()
  password: string;
}
