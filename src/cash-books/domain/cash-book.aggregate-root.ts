import { AggregateRoot } from '~/shared/domain/aggregate-root';
import { Uuid } from '~/shared/domain/value-objects';
import { Expense, MembershipFee, ReportingMonth } from './entities';
import { CashBalance, CashBookTitle } from './value-objects';

export class CashBook extends AggregateRoot {
  constructor(
    private readonly id: Uuid,
    private title: CashBookTitle,
    private cashBalance: CashBalance = 0,
    private reportingMonths: ReportingMonth[] = [],
    private membershipFees: MembershipFee[] = [],
    private expenses: Expense[] = [],
  ) {
    super();
  }

  public recordMembershipFee() {}

  public correctMembershipFeeEntry() {}

  public recordExpense() {}

  public correctExpenseEntry() {}

  private calculateCashBalance() {}
}
