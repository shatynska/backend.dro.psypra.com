import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsInt, IsNotEmpty } from 'class-validator';

export class CreateCashBookDto {
  @ApiProperty({
    example: 2016,
    type: 'integer',
    format: 'int32',
  })
  @IsNotEmpty()
  @IsInt()
  year: number;
  @ApiProperty({
    example: [2, 3, 4, 5, 7, 8, 9, 10, 11],
    type: 'integer',
    format: 'int32',
    isArray: true,
  })
  @IsNotEmpty()
  @IsArray()
  @IsInt({ each: true })
  reportingMonths: number[];
}
