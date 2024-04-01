import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryBus, QueryHandler } from '@nestjs/cqrs';
import { HeaderWithParentLinkDto } from '~/section-headers/application/dto/header-with-parent-link.dto';
import { GetHeaderWithHrefQuery } from '~/section-headers/application/queries/get-header-with-href/get-header-with-href.query';
import { GetHeaderWithHrefResult } from '~/section-headers/application/queries/get-header-with-href/get-header-with-href.result';
import { GetHeaderQuery } from '~/section-headers/application/queries/get-header/get-header.query';
import { GetHeaderResult } from '~/section-headers/application/queries/get-header/get-header.result';
import { NotFoundError } from '~/shared/application/errors/not-found.error';
import { Result, failure, success } from '~/shared/core/result';
import { READ_REPOSITORY_TOKEN, ReadRepository } from '../../read.repository';
import { GetDimensionMainSectionQuery } from './get-dimension-main-section.query';
import { GetDimensionMainSectionResult } from './get-dimension-main-section.result';

@QueryHandler(GetDimensionMainSectionQuery)
export class GetDimensionMainSectionHandler
  implements IQueryHandler<GetDimensionMainSectionQuery>
{
  constructor(
    @Inject(READ_REPOSITORY_TOKEN)
    private readRepository: ReadRepository,
    private readonly queryBus: QueryBus,
  ) {}

  async execute({
    dimensionAlias,
  }: GetDimensionMainSectionQuery): Promise<
    Result<Error, GetDimensionMainSectionResult>
  > {
    const headerQuery = new GetHeaderQuery(dimensionAlias);

    const header = await this.queryBus.execute<
      GetHeaderQuery,
      Result<Error, GetHeaderResult>
    >(headerQuery);

    if (header.isFailure()) {
      return failure(header.value);
    }

    const parentLinkQuery = new GetHeaderWithHrefQuery('questions');

    const parentLink = await this.queryBus.execute<
      GetHeaderWithHrefQuery,
      Result<Error, GetHeaderWithHrefResult>
    >(parentLinkQuery);

    if (parentLink.isFailure()) {
      return failure(parentLink.value);
    }

    const headerWithParentLink: HeaderWithParentLinkDto = {
      ...header.value,
      parentLink: parentLink.value,
    };

    const content =
      await this.readRepository.getDimensionWithItems(dimensionAlias);

    if (content === null) {
      return failure(new NotFoundError('Вимір не знайдено'));
    }

    return success({
      header: headerWithParentLink,
      content: content,
    });
  }
}
