import { CashBookDto } from '~/cash-books/application/dto/cash-book.dto';

export const CASH_BOOKS_READ_REPOSITORY_TOKEN = Symbol(
  'CashBooksReadRepositoryToken',
);

export interface CashBooksReadRepository {
  getById(id: string): Promise<CashBookDto | null>;
}
