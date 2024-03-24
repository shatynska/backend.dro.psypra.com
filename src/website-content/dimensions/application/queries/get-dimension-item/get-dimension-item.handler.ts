import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { NotFoundError } from '~/shared/application/errors/not-found.error';
import { Result, failure, success } from '~/shared/core/result';
import { DimensionItemDto } from '../../dto/dimension-item/dimension-item.dto';
import { READ_REPOSITORY_TOKEN, ReadRepository } from '../../read.repository';
import { GetDimensionItemQuery } from './get-dimension-item.query';

@QueryHandler(GetDimensionItemQuery)
export class GetDimensionItemHandler
  implements IQueryHandler<GetDimensionItemQuery>
{
  constructor(
    @Inject(READ_REPOSITORY_TOKEN)
    private readRepository: ReadRepository,
  ) {}

  async execute({
    parameters: { alias },
  }: GetDimensionItemQuery): Promise<Result<NotFoundError, DimensionItemDto>> {
    const item: DimensionItemDto = await this.readRepository.getDimensionItem({
      alias: alias,
    });

    if (item === null) {
      return failure(new NotFoundError('Елемент не знайдено'));
    }

    return success(item);
  }
}
