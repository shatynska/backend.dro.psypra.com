import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { CashBalanceDto } from './dto/cash-balance.dto';
import { CashBookDto } from './dto/cash-book.dto';

@Injectable()
export class CashBooksService {
  constructor(private readonly prismaService: PrismaService) {}

  async findCashBalance(): Promise<CashBalanceDto> {
    const cashBalance = await this.prismaService.cashBalance.findFirst();
    if (!cashBalance) {
      return null;
    }
    return cashBalance;
  }

  async findAllCashBooks(): Promise<CashBookDto[]> {
    const cashBooks = await this.prismaService.cashBook.findMany();
    return cashBooks;
  }

  async findCashBookById(id: CashBookDto['id']): Promise<CashBookDto> {
    const cashBook = await this.prismaService.cashBook.findFirst({
      where: { id: id },
    });
    if (!cashBook) {
      return null;
    }
    return cashBook;
  }
}
