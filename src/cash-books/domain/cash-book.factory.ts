import { CashBook } from './cash-book.aggregate-root';
import { CashBookYear, Uuid } from './value-objects';

export class CashBookFactory {
  public static async create(year: number) {
    return new CashBook(new Uuid(), new CashBookYear(year));
  }
}
