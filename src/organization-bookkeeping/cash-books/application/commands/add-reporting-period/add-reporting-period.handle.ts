import { Inject } from '@nestjs/common';
import { CommandHandler, IQueryHandler } from '@nestjs/cqrs';
import {
  CASH_BOOKS_WRITE_REPOSITORY_TOKEN,
  CashBooksWriteRepository,
} from '~/cash-books/domain/cash-books.write.repository';
import { ReportingPeriodCreationError } from '~/cash-books/domain/errors';
import { Result, failure, success } from '~/shared/core/result';
import { CashBookNotFoundError } from '../../errors/cash-book-not-found.error';
import { AddReportingPeriodCommand } from './add-reporting-period.command';

@CommandHandler(AddReportingPeriodCommand)
export class AddReportingPeriodHandler
  implements IQueryHandler<AddReportingPeriodCommand>
{
  constructor(
    @Inject(CASH_BOOKS_WRITE_REPOSITORY_TOKEN)
    private cashBooksWriteRepository: CashBooksWriteRepository,
  ) {}

  async execute(
    command: AddReportingPeriodCommand,
  ): Promise<
    Result<CashBookNotFoundError | ReportingPeriodCreationError, null>
  > {
    const { cashBookId, title, startDate, endDate } = command.params;

    const cashBook = await this.cashBooksWriteRepository.getById(cashBookId);

    if (cashBook === null) {
      // TODO Replace message with constant
      return failure(
        new CashBookNotFoundError(
          'Касова книги з заданим ідентифікатором не знайдена, тому не можливо додати звітній період до неї',
        ),
      );
    }

    const updatedCashBook = cashBook.addReportingPeriod({
      title: title,
      startDate: startDate,
      endDate: endDate,
    });

    if (updatedCashBook.isFailure()) {
      return failure(updatedCashBook.value);
    }

    await this.cashBooksWriteRepository.save(updatedCashBook.value);

    return success(null);
  }
}
