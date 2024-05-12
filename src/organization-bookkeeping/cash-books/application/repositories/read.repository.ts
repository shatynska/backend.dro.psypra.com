import { CashBookDto } from '~/cash-books/application/dto/cash-book.dto';

export const READ_REPOSITORY_TOKEN = Symbol('CashBooksReadRepositoryToken');

export interface ReadRepository {
  getById(id: string): Promise<CashBookDto | null>;
}
