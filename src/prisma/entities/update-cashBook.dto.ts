import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsInt, IsOptional } from 'class-validator';

export class UpdateCashBookDto {
  @ApiProperty({
    example: 2016,
    type: 'integer',
    format: 'int32',
    required: false,
  })
  @IsOptional()
  @IsInt()
  year?: number;
  @ApiProperty({
    example: [2, 3, 4, 5, 7, 8, 9, 10, 11],
    type: 'integer',
    format: 'int32',
    isArray: true,
    required: false,
  })
  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  reportingMonths?: number[];
}
