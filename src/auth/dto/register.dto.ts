import { IsPasswordsMatchingConstraint } from '@common/decorators';
import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength, Validate } from 'class-validator';
import { CreateUserDto } from '~/shared/infrastructure/prisma/entities/create-user.dto';

export class RegisterDto extends PickType(CreateUserDto, [
  'email',
  'password',
] as const) {
  email: string;

  @IsNotEmpty()
  password: string;

  @ApiProperty({ example: 'secret_password' })
  @IsString()
  @MinLength(6)
  @Validate(IsPasswordsMatchingConstraint)
  @IsNotEmpty()
  passportRepeat: string;
}
