import { Result } from '~/shared/core/result';
import { CashBook } from './cash-book.aggregate-root';
import { CashBookDto } from './dto/cash-book.dto';

export const CASH_BOOKS_WRITE_REPOSITORY_TOKEN = Symbol(
  'CashBooksWriteRepositoryToken',
);

export interface CashBooksWriteRepository {
  save(props: CashBookDto): Promise<Result<Error, void>>;

  getById(id: string): Promise<Result<Error, CashBook>>;
}
