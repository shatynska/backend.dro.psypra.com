import { ApiProperty } from '@nestjs/swagger';
import { CashBalance } from '@prisma/entities/cash-balance.entity';

export class CashBalanceResponseDto extends CashBalance {
  @ApiProperty({ example: '5600' })
  value: number;

  constructor(cashBalance: CashBalance) {
    super();
    Object.assign(this, cashBalance);
  }
}
