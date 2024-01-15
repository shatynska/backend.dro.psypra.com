import { Result, failure, success } from '~/shared/core/result';
import { AggregateRoot } from '~/shared/domain/aggregate-root';
import { DomainError, DomainErrors } from '~/shared/domain/errors';
import { AmountOfMoney, Title, Uuid } from '~/shared/domain/value-objects';

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

  static create(
    params: CreateCashBookParameters,
  ): Result<DomainErrors, CashBook> {
    const domainErrors: DomainErrors = new DomainErrors([]);

    const title = Title.create(params.title);
    if (title.isFailure()) {
      domainErrors.errors.push(title.value);
    }

    const id = Uuid.create();
    const cashBalance = AmountOfMoney.create(0);

    if (domainErrors.errors.length > 0) {
      return failure(domainErrors);
    }

    const cashBook = new CashBook(
      id.value as Uuid,
      title.value as Title,
      cashBalance.value as AmountOfMoney,
    );
    if (!cashBook) {
      domainErrors.errors.push(
        // TODO Replace message with constant
        new DomainError('Помилка при створенні касової книги'),
      );
      return failure(domainErrors);
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
