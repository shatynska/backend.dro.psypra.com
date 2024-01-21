import { Result, failure, success } from '~/shared/core/result';
import { AggregateRoot } from '~/shared/domain/aggregate-root';
import { AmountOfMoney, Title, Uuid } from '~/shared/domain/value-objects';
import { CashBookCreatingError } from '../errors';

export type CashBookParameters = {
  id: string;
  title: string;
  cashBalance: number;
};

export type CreateCashBookParameters = Pick<CashBookParameters, 'title'>;

export class CashBook extends AggregateRoot {
  private constructor(
    private readonly id: Uuid,
    private title: Title,
    private cashBalance: AmountOfMoney,
  ) {
    super();
  }

  getId() {
    return this.id.getValue();
  }

  getTitle() {
    return this.title.getValue();
  }

  getCashBalance() {
    return this.cashBalance.getValue();
  }

  static create(
    params: CreateCashBookParameters,
  ): Result<CashBookCreatingError, CashBook> {
    const creatingError = new CashBookCreatingError();

    const title = Title.create(params.title);
    if (title.isFailure()) {
      creatingError.errors.push(title.value);
    }

    const id = Uuid.create();
    const cashBalance = AmountOfMoney.create(0);

    if (creatingError.errors.length > 0) {
      return failure(creatingError);
    }

    const cashBook = new CashBook(
      id.value as Uuid,
      title.value as Title,
      cashBalance.value as AmountOfMoney,
    );

    return success(cashBook);
  }

  static reconstitute(params: CashBookParameters): CashBook {
    const id = Uuid.reconstitute(params.id);
    const title = Title.reconstitute(params.title);
    const cashBalance = AmountOfMoney.reconstitute(params.cashBalance);

    const cashBook = new CashBook(id, title, cashBalance);

    return cashBook;
  }
}
