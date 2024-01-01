import { Uuid } from '~/shared/domain/value-objects';
import { CashBook } from './cash-book.aggregate-root';
import { CashBookTitle } from './value-objects';

export class CashBookFactory {
  public static async create(title: string) {
    return new CashBook(new Uuid(), new CashBookTitle(title));
  }
}
