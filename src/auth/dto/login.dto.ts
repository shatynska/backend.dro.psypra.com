import { PickType } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { CreateUserDto } from '../../prisma/entities/create-user.dto';

export class LoginDto extends PickType(CreateUserDto, [
  'email',
  'password',
] as const) {
  email: string;

  @IsNotEmpty()
  password: string;
}
