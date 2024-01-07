import { AggregateRoot } from '~/shared/domain/aggregate-root';
import { Uuid } from '~/shared/domain/value-objects';
import { AmountOfMoney, CashBookTitle } from './value-objects';

export class CashBook extends AggregateRoot {
  constructor(
    private id: Uuid = new Uuid(),
    private title: CashBookTitle,
    private cashBalance: AmountOfMoney = new AmountOfMoney(),
  ) {
    super();
  }

  public mapToPrimitives() {
    return {
      id: this.id.getValue(),
      title: this.title.getValue(),
      cashBalance: this.cashBalance.getValue(),
    };
  }
}
