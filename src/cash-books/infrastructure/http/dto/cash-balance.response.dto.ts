import { CashBalanceDto } from './cash-balance.dto';

export class CashBalanceResponseDto extends CashBalanceDto {
  constructor(cashBalance: CashBalanceResponseDto) {
    super();
    Object.assign(this, cashBalance);
  }
}
