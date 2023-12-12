import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma/prisma.service';
import { CashBalanceDto } from './dto/cash-balance.dto';

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
}
