import { CashBalance } from './cash-balance.value-object';
import { CashBookId } from './cash-book-id.value-object';
import { CashBookYear } from './cash-book-year.value-object';
import { Expense } from './expense.entity';
import { MembershipFee } from './membership-fee.entity';

export class CashBook {
  constructor(
    private readonly id: CashBookId,
    private readonly year: CashBookYear,
    private cashBalance: CashBalance = 0,
    private membershipFees: MembershipFee[] = [],
    private expenses: Expense[] = [],
  ) {}

  public recordMembershipFee() {}

  public correctMembershipFeeEntry() {}

  public recordExpense() {}

  public correctExpenseEntry() {}

  private calculateCashBalance() {}
}
