import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Either, left, right } from '~/shared/domain/libs/either';
import { PrismaService } from '~/shared/infrastructure/prisma/prisma.service';
import { CashBalanceDto, CashBookDto } from './dto';

@Injectable()
export class CashBooksService {
  constructor(private readonly prismaService: PrismaService) {}

  async findCashBalance(): Promise<Either<Error, CashBalanceDto>> {
    const cashBalance = await this.prismaService.cashBalance.findFirst();
    if (!cashBalance) {
      return left(new Error());
    }
    return right(cashBalance);
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
