import { Injectable } from '@nestjs/common';
import { PrismaService } from '~/shared/infrastructure/prisma/prisma.service';
import { CashBookDto } from '../../../application/dto/cash-book.dto';
import { ReadRepository } from '../../../application/repositories/read.repository';
import { CashBooksMapper } from './cash-books.mapper';

@Injectable()
export class PrismaReadRepository implements ReadRepository {
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
