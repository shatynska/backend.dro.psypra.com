import { Inject } from '@nestjs/common';
import { CommandHandler, IQueryHandler } from '@nestjs/cqrs';
import {
  CASH_BOOKS_WRITE_REPOSITORY_TOKEN,
  CashBooksWriteRepository,
} from '~/cash-books/domain/cash-books.write.repository';
import { CashBook } from '~/cash-books/domain/entities/cash-book.entity';
import { CashBookCreationError } from '~/cash-books/domain/errors';
import { Result, failure } from '~/shared/core/result';
import { CreateCashBookCommand } from './create-cash-book.command';

@CommandHandler(CreateCashBookCommand)
export class CreateCashBookHandler
  implements IQueryHandler<CreateCashBookCommand>
{
  constructor(
    @Inject(CASH_BOOKS_WRITE_REPOSITORY_TOKEN)
    private cashBooksWriteRepository: CashBooksWriteRepository,
  ) {}

  async execute(
    command: CreateCashBookCommand,
  ): Promise<Result<CashBookCreationError, void>> {
    const { params } = command;

    // TODO Verify that the title does not already exist

    const cashBook = CashBook.create({ title: params.title });

    if (cashBook.isFailure()) {
      return failure(cashBook.value);
    }

    await this.cashBooksWriteRepository.save(cashBook.value);
  }
}
