import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateTokenDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  token: string;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  @IsNotEmpty()
  @IsDateString()
  exp: Date;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  userAgent: string;
}
