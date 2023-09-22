import { Provider, Role } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  email: string;
  @ApiProperty({
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  password?: string;
  @ApiProperty({
    enum: Provider,
    required: false,
    nullable: true,
  })
  @IsOptional()
  provider?: Provider;
  @ApiProperty({
    isArray: true,
    enum: Role,
  })
  @IsNotEmpty()
  @IsArray()
  roles: Role[];
}
