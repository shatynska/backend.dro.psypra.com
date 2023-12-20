import { ApiProperty } from '@nestjs/swagger';

export class CashBalance {
  @ApiProperty({
    example: 8420,
    type: 'integer',
    format: 'int32',
  })
  value: number;
}
