import { Result, failure, success } from '~/shared/core/result';
import { AggregateRoot } from '~/shared/domain/aggregate-root';
import { TitleCreationError } from '~/shared/domain/errors';
import { AmountOfMoney, Title, Uuid } from '~/shared/domain/value-objects';
import { CashBookCreationError } from '../errors';

export type CashBookPrimitives = {
  id: string;
  title: string;
  cashBalance: number;
};

export type CreateCashBookParameters = Pick<CashBookPrimitives, 'title'> & {
  isTitleUnique: boolean;
};

export class CashBook extends AggregateRoot {
  private constructor(
    private readonly id: Uuid,
    private title: Title,
    private cashBalance: AmountOfMoney,
  ) {
    super();
  }

  static create(
    params: CreateCashBookParameters,
  ): Result<CashBookCreationError, CashBook> {
    const creatingError = new CashBookCreationError();

    const title: Result<TitleCreationError, Title> = Title.create(
      params.title,
      params.isTitleUnique,
    );

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

  static reconstitute(params: CashBookPrimitives): CashBook {
    const id = Uuid.reconstitute(params.id);
    const title = Title.reconstitute(params.title);
    const cashBalance = AmountOfMoney.reconstitute(params.cashBalance);

    const cashBook = new CashBook(id, title, cashBalance);

    return cashBook;
  }

  mapToPrimitives(): CashBookPrimitives {
    const mappedCashBook = {
      id: this.id.getValue(),
      title: this.title.getValue(),
      cashBalance: this.cashBalance.getValue(),
    };

    return mappedCashBook;
  }
}
