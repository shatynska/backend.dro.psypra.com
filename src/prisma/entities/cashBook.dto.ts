import { ApiProperty } from '@nestjs/swagger';

export class CashBookDto {
  @ApiProperty({
    example: 'c0287617-9f36-489e-ba72-d462777987e9',
  })
  id: string;
  @ApiProperty({
    example: 2022,
    type: 'integer',
    format: 'int32',
  })
  year: number;
  @ApiProperty({
    example: [2, 3, 4, 5, 7, 8, 9, 10, 11],
    type: 'integer',
    format: 'int32',
    isArray: true,
  })
  reportingMonths: number[];
}
