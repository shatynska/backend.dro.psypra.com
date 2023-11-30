import { Provider, Role } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsEmail,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({
    example: 'test@gmail.com',
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsEmail()
  email?: string;
  @ApiProperty({
    example: 'secret_password',
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  @MinLength(6)
  password?: string | null;
  @ApiProperty({
    enum: Provider,
    required: false,
    nullable: true,
  })
  @IsOptional()
  provider?: Provider | null;
  @ApiProperty({
    example: [Role.USER],
    enum: Role,
    required: false,
  })
  @IsOptional()
  @IsArray()
  roles?: Role[];
}
