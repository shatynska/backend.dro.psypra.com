import { IsPasswordsMatchingConstraint } from '@common/decorators';
import {
  IsString,
  IsEmail,
  MinLength,
  Validate,
  IsNotEmpty,
} from 'class-validator';

export class RegisterDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  password: string;

  @IsString()
  @MinLength(6)
  @Validate(IsPasswordsMatchingConstraint)
  @IsNotEmpty()
  passportRepeat: string;
}
