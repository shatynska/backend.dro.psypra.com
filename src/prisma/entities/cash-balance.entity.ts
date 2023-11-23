import { ApiProperty } from '@nestjs/swagger';

export class CashBalance {
  @ApiProperty()
  value: number;
}
