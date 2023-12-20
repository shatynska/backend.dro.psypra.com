import { Provider, Role } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'test@gmail.com',
  })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;
  @ApiProperty({
    example: 'secret_password',
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  @MinLength(6)
  password?: string;
  @ApiProperty({
    enum: Provider,
    required: false,
    nullable: true,
  })
  @IsOptional()
  provider?: Provider;
  @ApiProperty({
    example: [Role.USER],
    enum: Role,
  })
  @IsNotEmpty()
  @IsArray()
  roles: Role[];
}
