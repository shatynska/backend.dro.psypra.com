import { CashBook } from '../../domain/entities/cash-book.entity';

export const WRITE_REPOSITORY_TOKEN = Symbol('CashBooksWriteRepositoryToken');

export interface WriteRepository {
  isTitleUnique(title: string): Promise<boolean>;

  save(cashBook: CashBook): Promise<void>;

  getById(id: string): Promise<CashBook | null>;
}
