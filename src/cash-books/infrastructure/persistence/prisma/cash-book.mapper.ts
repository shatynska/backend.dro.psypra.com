import { CashBook as PrismaCashBook } from '@prisma/client';
import { CashBookDto } from '~/cash-books/application/dto/cash-book.dto';
import { CashBook } from '~/cash-books/domain/cash-book.aggregate-root';

export class CashBookMapper {
  static mapToPersistence(cashBook: CashBook): PrismaCashBook {
    const mappedCashBook = {
      id: cashBook.getId(),
      title: cashBook.getTitle(),
      cashBalance: cashBook.getCashBalance(),
    };

    return mappedCashBook;
  }

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
