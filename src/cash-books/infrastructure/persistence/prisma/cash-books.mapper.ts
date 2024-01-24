import { CashBook as PrismaCashBook } from '@prisma/client';
import { CashBookDto } from '~/cash-books/application/dto/cash-book.dto';
import { CashBook } from '~/cash-books/domain/entities/cash-book.entity';

export class CashBooksMapper {
  static mapToDomain(params: PrismaCashBook): CashBook {
    const mappedCashBook = CashBook.reconstitute({
      title: params.title,
      id: params.id,
      cashBalance: params.cashBalance,
    });

    return mappedCashBook;
  }

  static mapToDto(params: PrismaCashBook): CashBookDto {
    const mappedCashBook = {
      title: params.title,
      id: params.id,
      cashBalance: params.cashBalance,
    };

    return mappedCashBook;
  }
}
