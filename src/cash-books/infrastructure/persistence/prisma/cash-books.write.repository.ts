import { Injectable } from '@nestjs/common';
import { CashBooksWriteRepository } from '~/cash-books/domain/cash-books.write.repository';
import { CashBook } from '~/cash-books/domain/entities/cash-book.entity';
import { PrismaService } from '~/shared/infrastructure/prisma/prisma.service';
import { CashBooksMapper } from './cash-books.mapper';

@Injectable()
export class PrismaCashBooksWriteRepository
  implements CashBooksWriteRepository
{
  constructor(private readonly prismaService: PrismaService) {}

  async isTitleUnique(title: string): Promise<boolean> {
    const entries = await this.prismaService.cashBook.count({
      where: { title },
    });

    return entries === 0 ? true : false;
  }

  async save(cashBook: CashBook): Promise<void> {
    const cashBookPrimitives = cashBook.mapToPrimitives();

    const { id, title, cashBalance, reportingPeriods } = cashBookPrimitives;

    await this.prismaService.cashBook.upsert({
      where: {
        id,
      },
      update: {
        id,
        title,
        cashBalance,
        reportingPeriods: { createMany: { data: reportingPeriods } },
      },
      create: {
        id,
        title,
        cashBalance,
        reportingPeriods: { createMany: { data: reportingPeriods } },
      },
    });
  }

  async getById(id: string): Promise<CashBook | null> {
    const cashBook = await this.prismaService.cashBook.findUnique({
      where: {
        id,
      },
      include: {
        reportingPeriods: true,
      },
    });
    if (!cashBook) {
      return null;
    }

    return CashBooksMapper.mapToDomain(cashBook);
  }
}
