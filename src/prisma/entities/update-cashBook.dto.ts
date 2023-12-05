import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateCashBookDto {
  @ApiProperty({
    example: 2022,
    required: false,
  })
  @IsOptional()
  @IsString()
  title?: string;
}
