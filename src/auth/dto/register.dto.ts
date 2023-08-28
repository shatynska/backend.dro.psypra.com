import { IsPasswordsMatchingConstraint } from '@common/decorators';
import { IsString, IsEmail, MinLength, Validate } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  login: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  @MinLength(6)
  @Validate(IsPasswordsMatchingConstraint)
  passportRepeat: string;
}
