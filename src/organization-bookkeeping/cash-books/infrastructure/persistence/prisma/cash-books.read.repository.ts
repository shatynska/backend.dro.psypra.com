import { Injectable } from '@nestjs/common';
import { CashBookDto } from '~/cash-books/application/dto/cash-book.dto';
import { PrismaService } from '~/shared/infrastructure/prisma/prisma.service';
import { CashBooksMapper } from './cash-books.mapper';

@Injectable()
export class PrismaCashBooksReadRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getById(id: string): Promise<CashBookDto | null> {
    const cashBook = await this.prismaService.cashBook.findUnique({
      where: {
        id: id,
      },
    });

    if (!cashBook) {
      return null;
    }

    return CashBooksMapper.mapToDto(cashBook);
  }
}
