import { Provider, Role } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsString()
  email?: string;
  @ApiProperty({
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsString()
  password?: string | null;
  @ApiProperty({
    enum: Provider,
    required: false,
    nullable: true,
  })
  @IsOptional()
  provider?: Provider | null;
  @ApiProperty({
    isArray: true,
    enum: Role,
    required: false,
  })
  @IsOptional()
  @IsArray()
  roles?: Role[];
}
