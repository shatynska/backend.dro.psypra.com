import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { failure, success } from '~/shared/core/result';
import { PrismaService } from '~/shared/infrastructure/prisma/prisma.service';
import { GetCashBalanceQuery } from './get-cash-balance.query';

@QueryHandler(GetCashBalanceQuery)
export class GetCashBalanceHandler
  implements IQueryHandler<GetCashBalanceQuery>
{
  constructor(private prismaService: PrismaService) {}

  async execute(query: GetCashBalanceQuery) {
    const { id } = query;
    const result = await this.prismaService.cashBook.findUnique({
      where: { id: id },
      select: { cashBalance: true },
    });
    if (!result) {
      return failure(new Error());
    }
    return success(result);
  }
}
