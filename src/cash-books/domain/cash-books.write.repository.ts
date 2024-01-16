import { CashBook } from './cash-book.aggregate-root';

export const CASH_BOOKS_WRITE_REPOSITORY_TOKEN = Symbol(
  'CashBooksWriteRepositoryToken',
);

export interface CashBooksWriteRepository {
  save(cashBook: CashBook): Promise<void>;

  getById(id: string): Promise<CashBook | null>;
}
