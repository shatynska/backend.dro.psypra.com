import { Result, failure, success } from '~/shared/core/result';
import { Uuid } from '~/shared/domain/value-objects';
import { CashBook } from './cash-book.aggregate-root';
import { CashBookDto } from './dto/cash-book.dto';
import { AmountOfMoney, CashBookTitle } from './value-objects';

export class CashBookFactory {
  static create(props: CashBookDto): Result<Error, CashBook> {
    const cashBook = new CashBook(new Uuid(), new CashBookTitle(props.title));

    if (!cashBook) {
      return failure(new Error());
    }

    return success(cashBook);
  }

  static reconstitute(props: Required<CashBookDto>): Result<Error, CashBook> {
    const cashBook = new CashBook(
      new Uuid(props.id),
      new CashBookTitle(props.title),
      new AmountOfMoney(props.cashBalance),
    );

    if (!cashBook) {
      return failure(new Error());
    }

    return success(cashBook);
  }
}
