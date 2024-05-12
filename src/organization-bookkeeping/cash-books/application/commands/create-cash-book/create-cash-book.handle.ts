import { Inject } from '@nestjs/common';
import { CommandHandler, IQueryHandler } from '@nestjs/cqrs';
import { Result, failure, success } from '~/shared/core/result';
import { CashBook } from '../../../domain/entities/cash-book.entity';
import { CashBookCreationError } from '../../../domain/errors';
import {
  WRITE_REPOSITORY_TOKEN,
  WriteRepository,
} from '../../repositories/write.repository';
import { CreateCashBookCommand } from './create-cash-book.command';

@CommandHandler(CreateCashBookCommand)
export class CreateCashBookHandler
  implements IQueryHandler<CreateCashBookCommand>
{
  constructor(
    @Inject(WRITE_REPOSITORY_TOKEN)
    private writeRepository: WriteRepository,
  ) {}

  async execute(
    command: CreateCashBookCommand,
  ): Promise<Result<CashBookCreationError, null>> {
    const { title } = command.params;

    const isTitleUnique = await this.writeRepository.isTitleUnique(title);

    const cashBook = CashBook.create({
      title: title,
      isTitleUnique: isTitleUnique,
    });

    if (cashBook.isFailure()) {
      return failure(cashBook.value);
    }

    await this.writeRepository.save(cashBook.value);

    return success(null);
  }
}
