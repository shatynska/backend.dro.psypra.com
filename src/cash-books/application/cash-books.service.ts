import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '~/shared/infrastructure/prisma/prisma.service';
import { CashBookDto } from './dto';

@Injectable()
export class CashBooksService {
  constructor(private readonly prismaService: PrismaService) {}

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

  async createCashBook(
    createCashBookDto: Prisma.CashBookCreateInput,
  ): Promise<CashBookDto> {
    console.log(createCashBookDto);
    const newCashBook = await this.prismaService.cashBook.create({
      data: createCashBookDto,
    });
    return newCashBook;
  }
}
