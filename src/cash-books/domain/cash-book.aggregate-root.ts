import { Uuid } from '~/shared/domain/domain/value-objects/uuid.value-object';
import { Expense } from './entities/expense.entity';
import { MembershipFee } from './entities/membership-fee.entity';
import { CashBalance } from './value-objects/cash-balance.value-object';
import { CashBookTitle } from './value-objects/cash-book-title.value-object';

export class CashBook {
  constructor(
    private readonly id: Uuid,
    private title: CashBookTitle,
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
