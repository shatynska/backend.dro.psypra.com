import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsString } from 'class-validator';

export class UpdateTokenDto {
  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsString()
  token?: string;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    required: false,
  })
  @IsOptional()
  @IsDateString()
  exp?: Date;
  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsString()
  userAgent?: string;
}
