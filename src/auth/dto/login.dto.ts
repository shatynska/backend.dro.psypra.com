import { PickType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { UserEntity } from 'src/users/entities';

export class LoginDto extends PickType(UserEntity, [
  'email',
  'password',
] as const) {
  email: string;

  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  password: string;
}
