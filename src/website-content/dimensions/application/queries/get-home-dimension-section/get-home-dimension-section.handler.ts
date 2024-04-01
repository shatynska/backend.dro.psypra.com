import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryBus, QueryHandler } from '@nestjs/cqrs';
import { GetHeaderWithHrefQuery } from '~/section-headers/application/queries/get-header-with-href/get-header-with-href.query';
import { GetHeaderWithHrefResult } from '~/section-headers/application/queries/get-header-with-href/get-header-with-href.result';
import { NotFoundError } from '~/shared/application/errors/not-found.error';
import { Result, failure, success } from '~/shared/core/result';
import { READ_REPOSITORY_TOKEN, ReadRepository } from '../../read.repository';
import { GetHomeDimensionSectionQuery } from './get-home-dimension-section.query';
import { GetHomeDimensionSectionResult } from './get-home-dimension-section.result';

@QueryHandler(GetHomeDimensionSectionQuery)
export class GetHomeDimensionSectionHandler
  implements IQueryHandler<GetHomeDimensionSectionQuery>
{
  constructor(
    @Inject(READ_REPOSITORY_TOKEN)
    private readRepository: ReadRepository,
    private readonly queryBus: QueryBus,
  ) {}

  async execute({
    dimensionAlias,
  }: GetHomeDimensionSectionQuery): Promise<
    Result<Error, GetHomeDimensionSectionResult>
  > {
    const headerQuery = new GetHeaderWithHrefQuery(dimensionAlias);

    const header = await this.queryBus.execute<
      GetHeaderWithHrefQuery,
      Result<Error, GetHeaderWithHrefResult>
    >(headerQuery);

    if (header.isFailure()) {
      return failure(header.value);
    }

    const content =
      await this.readRepository.getDimensionWithItems(dimensionAlias);

    if (content === null) {
      return failure(new NotFoundError('Вимір не знайдено'));
    }

    return success({
      header: header.value,
      content: content,
    });
  }
}
