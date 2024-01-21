import { Injectable } from '@nestjs/common';
import { PrismaService } from '~/shared/infrastructure/prisma/prisma.service';
import { CashBookDto } from './dto/cash-book.dto';

@Injectable()
export class CashBooksService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAllCashBooks(): Promise<CashBookDto[]> {
    const cashBooks = await this.prismaService.cashBook.findMany();
    return cashBooks;
  }

  async findCashBookById(id: CashBookDto['id']): Promise<CashBookDto | null> {
    const cashBook = await this.prismaService.cashBook.findFirst({
      where: { id: id },
    });
    if (!cashBook) {
      return null;
    }
    return cashBook;
  }
}
