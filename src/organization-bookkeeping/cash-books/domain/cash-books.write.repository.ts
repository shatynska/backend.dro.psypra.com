import { CashBook } from './entities/cash-book.entity';

export const CASH_BOOKS_WRITE_REPOSITORY_TOKEN = Symbol(
  'CashBooksWriteRepositoryToken',
);

export interface CashBooksWriteRepository {
  isTitleUnique(title: string): Promise<boolean>;

  save(cashBook: CashBook): Promise<void>;

  getById(id: string): Promise<CashBook | null>;
}
