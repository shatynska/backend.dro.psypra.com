import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, IsUUID } from 'class-validator';

export class ConnectUserDto {
  @ApiProperty({
    example: 'c0377617-9f36-489e-ba72-d462777987e9',
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  @IsUUID(4)
  id?: string;
  @ApiProperty({
    example: 'test@gmail.com',
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  @IsEmail()
  email?: string;
}
