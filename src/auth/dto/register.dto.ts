import { IsString, IsEmail, MinLength } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  login: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  @MinLength(6)
  passportRepeat: string;
}
