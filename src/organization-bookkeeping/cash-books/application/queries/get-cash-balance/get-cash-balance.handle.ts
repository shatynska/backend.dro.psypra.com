import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Result, failure, success } from '~/shared/core/result';
import {
  CASH_BOOKS_READ_REPOSITORY_TOKEN,
  CashBooksReadRepository,
} from '../../cash-books.read.repository';
import { CashBalanceDto } from '../../dto/cash-balance.dto';
import { CashBookDto } from '../../dto/cash-book.dto';
import { CashBookNotFoundError } from '../../errors/cash-book-not-found.error';
import { GetCashBalanceQuery } from './get-cash-balance.query';

@QueryHandler(GetCashBalanceQuery)
export class GetCashBalanceHandler
  implements IQueryHandler<GetCashBalanceQuery>
{
  constructor(
    @Inject(CASH_BOOKS_READ_REPOSITORY_TOKEN)
    private cashBooksReadRepository: CashBooksReadRepository,
  ) {}

  async execute(
    query: GetCashBalanceQuery,
  ): Promise<Result<CashBookNotFoundError, CashBalanceDto>> {
    const { id } = query;

    const cashBook: CashBookDto | null =
      await this.cashBooksReadRepository.getById(id);

    if (cashBook === null) {
      return failure(new CashBookNotFoundError());
    }

    const cashBalance = cashBook.cashBalance;

    return success({ value: cashBalance });
  }
}
