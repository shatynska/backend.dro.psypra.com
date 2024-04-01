import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryBus, QueryHandler } from '@nestjs/cqrs';
import { SectionHeaderWithParentLinkDto } from '~/page-sections/application/dto/section-header-with-parent-link.dto';
import { GetSectionHeaderWithHrefQuery } from '~/page-sections/application/queries/get-section-header-with-href/get-section-header-with-href.query';
import { GetSectionHeaderWithHrefResult } from '~/page-sections/application/queries/get-section-header-with-href/get-section-header-with-href.result';
import { GetSectionHeaderQuery } from '~/page-sections/application/queries/get-section-header/get-section-header.query';
import { GetSectionHeaderResult } from '~/page-sections/application/queries/get-section-header/get-section-header.result';
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
    const headerQuery = new GetSectionHeaderQuery(dimensionAlias);

    const header = await this.queryBus.execute<
      GetSectionHeaderQuery,
      Result<Error, GetSectionHeaderResult>
    >(headerQuery);

    if (header.isFailure()) {
      return failure(header.value);
    }

    const parentLinkQuery = new GetSectionHeaderWithHrefQuery('questions');

    const parentLink = await this.queryBus.execute<
      GetSectionHeaderWithHrefQuery,
      Result<Error, GetSectionHeaderWithHrefResult>
    >(parentLinkQuery);

    if (parentLink.isFailure()) {
      return failure(parentLink.value);
    }

    const headerWithParentLink: SectionHeaderWithParentLinkDto = {
      ...header.value,
      parentLink: parentLink.value,
    };

    const content =
      await this.readRepository.getDimensionItemsByDimensionAlias(
        dimensionAlias,
      );

    if (content === null) {
      return failure(new NotFoundError('Вимір не знайдено'));
    }

    return success({
      header: headerWithParentLink,
      content: content,
    });
  }
}
