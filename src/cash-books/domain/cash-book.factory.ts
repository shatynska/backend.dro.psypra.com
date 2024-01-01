import { Uuid } from '~/shared/domain/domain/value-objects/uuid.value-object';
import { CashBook } from './cash-book.aggregate-root';
import { CashBookTitle } from './value-objects/cash-book-title.value-object';

export class CashBookFactory {
  public static async create(title: string) {
    return new CashBook(new Uuid(), new CashBookTitle(title));
  }
}
