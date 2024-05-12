import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryBus, QueryHandler } from '@nestjs/cqrs';
import { NotFoundError } from '~/shared/application/errors/not-found.error';
import { Result, failure, success } from '~/shared/core/result';
import { GetSectionHeaderWithHrefQuery } from '../../../../page-sections/application/queries/get-section-header-with-href/get-section-header-with-href.query';
import { GetSectionHeaderWithHrefResult } from '../../../../page-sections/application/queries/get-section-header-with-href/get-section-header-with-href.result';
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
    const headerQuery = new GetSectionHeaderWithHrefQuery(dimensionAlias);

    const header = await this.queryBus.execute<
      GetSectionHeaderWithHrefQuery,
      Result<Error, GetSectionHeaderWithHrefResult>
    >(headerQuery);

    if (header.isFailure()) {
      return failure(header.value);
    }

    const content =
      await this.readRepository.getDimensionItemsByDimensionAlias(
        dimensionAlias,
      );

    if (content === null) {
      return failure(new NotFoundError('Вимір не знайдено'));
    }

    return success({
      header: header.value,
      content: content,
    });
  }
}
