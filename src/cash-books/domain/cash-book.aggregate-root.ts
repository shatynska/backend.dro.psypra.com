import { Uuid } from '~/shared/domain/domain/value-objects/uuid.value-object';
import { Expense } from './entites/expense.entity';
import { MembershipFee } from './entites/membership-fee.entity';
import { CashBalance } from './value-objects/cash-balance.value-object';
import { CashBookYear } from './value-objects/cash-book-year.value-object';

export class CashBook {
  constructor(
    private readonly id: Uuid,
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
