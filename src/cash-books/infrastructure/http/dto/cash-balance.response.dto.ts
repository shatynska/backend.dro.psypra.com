import { CashBalanceDto } from '~/cash-books/application/dto';

export class CashBalanceResponseDto extends CashBalanceDto {
  constructor(cashBalance: CashBalanceResponseDto) {
    super();
    Object.assign(this, cashBalance);
  }
}
