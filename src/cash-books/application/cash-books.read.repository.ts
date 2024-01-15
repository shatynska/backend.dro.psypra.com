import { CashBookDto } from '~/cash-books/application/dto/cash-book.dto';
import { Result } from '~/shared/core/result';

export const CASH_BOOKS_READ_REPOSITORY_TOKEN = Symbol(
  'CashBooksReadRepositoryToken',
);

export interface CashBooksReadRepository {
  getById(id: string): Promise<Result<Error, CashBookDto>>;
}
