import { CashBalance } from './cash-balance.value-object';
import { CashBookId } from './cash-book-id.value-object';
import { Expense } from './expense.entity';
import { MembershipFee } from './membership-fee.entity';

export class CashBook {
  private readonly id: CashBookId;
  private cashBalance: CashBalance;
  private membershipFees: MembershipFee[];
  private expenses: Expense[];

  public recordMembershipFee() {}

  public correctMembershipFeeEntry() {}

  public recordExpense() {}

  public correctExpenseEntry() {}

  private calculateCashBalance() {}
}
