import { ApiProperty } from '@nestjs/swagger';

export class ReportingMonthDto {
  @ApiProperty({
    example: 'c0297617-9f36-489e-ba72-d462777987e9',
  })
  id: string;
  @ApiProperty({
    example: 2022 - 09 - 01,
    type: 'string',
    format: 'date-time',
  })
  month: Date;
}
