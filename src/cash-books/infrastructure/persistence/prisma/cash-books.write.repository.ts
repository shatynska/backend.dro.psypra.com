import { Injectable } from '@nestjs/common';
import { CashBook } from '~/cash-books/domain/cash-book.aggregate-root';
import { CashBooksWriteRepository } from '~/cash-books/domain/cash-books.write.repository';
import { PrismaService } from '~/shared/infrastructure/prisma/prisma.service';
import { CashBookMapper } from './cash-book.mapper';

@Injectable()
export class PrismaCashBooksWriteRepository
  implements CashBooksWriteRepository
{
  constructor(private readonly prismaService: PrismaService) {}

  async save(cashBook: CashBook): Promise<void> {
    const mappedCashBook = CashBookMapper.mapToPersistence(cashBook);

    await this.prismaService.cashBook.create({
      data: mappedCashBook,
    });
  }

  async getById(id: string): Promise<CashBook | null> {
    const cashBook = await this.prismaService.cashBook.findUnique({
      where: {
        id: id,
      },
    });
    if (!cashBook) {
      return null;
    }

    return CashBookMapper.mapToDomain(cashBook);
  }
}
