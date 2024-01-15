import { Result, failure, success } from '~/shared/core/result';
import { AggregateRoot } from '~/shared/domain/aggregate-root';
import { AmountOfMoney, Title, Uuid } from '~/shared/domain/value-objects';

export type CashBookParameters = {
  id: string;
  title: string;
  cashBalance: number;
};

export type CreateCashBookParameters = Pick<CashBookParameters, 'title'>;

export class CashBook extends AggregateRoot {
  private constructor(
    private id: Uuid = new Uuid(),
    private title: Title,
    private cashBalance: AmountOfMoney = new AmountOfMoney(),
  ) {
    super();
  }

  static create(params: CreateCashBookParameters): Result<Error, CashBook> {
    const cashBook = new CashBook(new Uuid(), new CashBookTitle(params.title));

    if (!cashBook) {
      return failure(new Error());
    }

    return success(cashBook);
  }

  static reconstitute(params: CashBookParameters): Result<Error, CashBook> {
    const cashBook = new CashBook(
      new Uuid(params.id),
      new Title(params.title),
      new AmountOfMoney(params.cashBalance),
    );

    if (!cashBook) {
      return failure(new Error());
    }

    return success(cashBook);
  }
}
