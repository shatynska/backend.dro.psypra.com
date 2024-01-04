import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateCashBookDto {
  @ApiProperty({
    example: 2022,
    required: false,
  })
  @IsOptional()
  @IsString()
  title?: string;
  @ApiProperty({
    example: 842000,
    type: 'integer',
    format: 'int32',
    required: false,
  })
  @IsOptional()
  @IsInt()
  cashBalance?: number;
}
