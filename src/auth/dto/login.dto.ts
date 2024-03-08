import { ApiProperty } from '@nestjs/swagger';
import { MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: 'myUserName',
  })
  @MinLength(4)
  identifier: string;

  @ApiProperty({ example: 'secret_password' })
  @MinLength(6)
  password: string;
}
