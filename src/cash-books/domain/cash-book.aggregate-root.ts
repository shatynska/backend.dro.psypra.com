import { Result, failure, success } from '~/shared/core/result';
import { AggregateRoot } from '~/shared/domain/aggregate-root';
import { Uuid } from '~/shared/domain/value-objects';
import { AmountOfMoney } from '~/shared/domain/value-objects/amount-of-money.value-object';
import { Title } from '~/shared/domain/value-objects/title.value-object';

export class CashBook extends AggregateRoot {
  private constructor(
    private id: Uuid = new Uuid(),
    private title: Title,
    private cashBalance: AmountOfMoney = new AmountOfMoney(),
  ) {
    super();
  }

  static create(props: CashBook): Result<Error, CashBook> {
    const cashBook = new CashBook(new Uuid(), new CashBookTitle(props.title));

    if (!cashBook) {
      return failure(new Error());
    }

    return success(cashBook);
  }

  static reconstitute(props: Required<CashBook>): Result<Error, CashBook> {
    const cashBook = new CashBook(
      new Uuid(props.id),
      new Title(props.title),
      new AmountOfMoney(props.cashBalance),
    );

    if (!cashBook) {
      return failure(new Error());
    }

    return success(cashBook);
  }

  public mapToPrimitives() {
    return {
      id: this.id.getValue(),
      title: this.title.getValue(),
      cashBalance: this.cashBalance.getValue(),
    };
  }
}
