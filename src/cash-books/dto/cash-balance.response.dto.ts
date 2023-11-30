import { CashBalance } from '@prisma/entities/cashBalance.entity';

export class CashBalanceResponseDto extends CashBalance {
  constructor(cashBalance: CashBalance) {
    super();
    Object.assign(this, cashBalance);
  }
}
