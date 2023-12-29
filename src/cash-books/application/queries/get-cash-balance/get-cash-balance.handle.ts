import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { left, right } from '~/shared/domain/libs/either';
import { PrismaService } from '~/shared/infrastructure/prisma/prisma.service';
import { GetCashBalanceQuery } from './get-cash-balance.query';

@QueryHandler(GetCashBalanceQuery)
export class GetCashBalanceHandler
  implements IQueryHandler<GetCashBalanceQuery>
{
  constructor(private prismaService: PrismaService) {}

  async execute() {
    const result = await this.prismaService.cashBalance.findFirst();
    if (!result) {
      return left(new Error());
    }
    return right(result);
  }
}
