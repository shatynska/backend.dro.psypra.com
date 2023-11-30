import { Injectable } from '@nestjs/common';
import { CashBalance } from '@prisma/entities/cashBalance.entity';
import { PrismaService } from '@prisma/prisma.service';

@Injectable()
export class CashBooksService {
  constructor(private readonly prismaService: PrismaService) {}

  async findCashBalance(): Promise<CashBalance> {
    const cashBalance = await this.prismaService.cashBalance.findFirst({});
    if (!cashBalance) {
      return null;
    }
    return cashBalance;
  }
}
