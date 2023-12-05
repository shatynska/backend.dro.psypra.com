import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty } from 'class-validator';

export class CreateReportingMonthDto {
  @ApiProperty({
    example: 2022 - 09 - 01,
    type: 'string',
    format: 'date-time',
  })
  @IsNotEmpty()
  @IsDateString()
  month: Date;
}
