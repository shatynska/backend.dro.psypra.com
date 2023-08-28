import { IsString, IsEmail, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail()
  login: string;

  @IsString()
  @MinLength(6)
  password: string;
}
