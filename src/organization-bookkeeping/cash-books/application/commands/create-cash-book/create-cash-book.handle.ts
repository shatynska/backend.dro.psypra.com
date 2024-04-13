import { Inject } from '@nestjs/common';
import { CommandHandler, IQueryHandler } from '@nestjs/cqrs';
import {
  CASH_BOOKS_WRITE_REPOSITORY_TOKEN,
  CashBooksWriteRepository,
} from '~/cash-books/domain/cash-books.write.repository';
import { CashBook } from '~/cash-books/domain/entities/cash-book.entity';
import { CashBookCreationError } from '~/cash-books/domain/errors';
import { Result, failure, success } from '~/shared/core/result';
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
  ): Promise<Result<CashBookCreationError, null>> {
    const { title } = command.params;

    const isTitleUnique =
      await this.cashBooksWriteRepository.isTitleUnique(title);

    const cashBook = CashBook.create({
      title: title,
      isTitleUnique: isTitleUnique,
    });

    if (cashBook.isFailure()) {
      return failure(cashBook.value);
    }

    await this.cashBooksWriteRepository.save(cashBook.value);

    return success(null);
  }
}
