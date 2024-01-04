import { ApiProperty } from '@nestjs/swagger';
import { ReportingMonth } from './reportingMonth.entity';

export class CashBook {
  @ApiProperty({
    example: 'c0287617-9f36-489e-ba72-d462777987e9',
  })
  id: string;
  @ApiProperty({
    example: 2022,
  })
  title: string;
  @ApiProperty({
    type: () => ReportingMonth,
    isArray: true,
    required: false,
  })
  reportingMonths?: ReportingMonth[];
  @ApiProperty({
    example: 842000,
    type: 'integer',
    format: 'int32',
  })
  cashBalance: number;
}
