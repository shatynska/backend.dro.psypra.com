import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { failure, success } from '~/shared/core/result';
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
      return failure(new Error());
    }
    return success(result);
  }
}
