import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { NotFoundError } from '~/shared/application/errors/not-found.error';
import { Result, failure, success } from '~/shared/core/result';
import { DimensionWithHrefDto } from '../../dto/dimension-with-href/dimension-with-href.dto';
import { READ_REPOSITORY_TOKEN, ReadRepository } from '../../read.repository';
import { GetDimensionWithHrefQuery } from './get-dimension-with-href.query';

@QueryHandler(GetDimensionWithHrefQuery)
export class GetDimensionWithHrefHandler
  implements IQueryHandler<GetDimensionWithHrefQuery>
{
  constructor(
    @Inject(READ_REPOSITORY_TOKEN)
    private readRepository: ReadRepository,
  ) {}

  async execute({
    alias,
  }: GetDimensionWithHrefQuery): Promise<
    Result<NotFoundError, DimensionWithHrefDto>
  > {
    const dimension: DimensionWithHrefDto =
      await this.readRepository.getDimensionWithHref(alias);

    if (dimension === null) {
      return failure(new NotFoundError('Вимір не знайдено'));
    }

    return success(dimension);
  }
}
