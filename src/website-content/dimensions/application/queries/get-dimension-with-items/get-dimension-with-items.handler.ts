import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { NotFoundError } from '~/shared/application/errors/not-found.error';
import { Result, failure, success } from '~/shared/core/result';
import { DimensionWithItemsDto } from '../../dto/dimension-with-items.dto';
import { READ_REPOSITORY_TOKEN, ReadRepository } from '../../read.repository';
import { GetDimensionWithItemsQuery } from './get-dimension-with-items.query';

@QueryHandler(GetDimensionWithItemsQuery)
export class GetDimensionWithItemsHandler
  implements IQueryHandler<GetDimensionWithItemsQuery>
{
  constructor(
    @Inject(READ_REPOSITORY_TOKEN)
    private readRepository: ReadRepository,
  ) {}

  async execute({
    alias,
  }: GetDimensionWithItemsQuery): Promise<
    Result<NotFoundError, DimensionWithItemsDto>
  > {
    const dimension: DimensionWithItemsDto =
      await this.readRepository.getDimensionWithItems(alias);

    if (dimension === null) {
      return failure(new NotFoundError('Вимір не знайдено'));
    }

    return success(dimension);
  }
}
