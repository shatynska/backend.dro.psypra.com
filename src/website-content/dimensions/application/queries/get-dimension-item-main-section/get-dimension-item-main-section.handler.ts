import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryBus, QueryHandler } from '@nestjs/cqrs';
import { NotFoundError } from '~/shared/application/errors/not-found.error';
import { Result, failure, success } from '~/shared/core/result';
import { SectionHeaderWithParentLinkDto } from '../../../../page-sections/application/dto/section-header-with-parent-link.dto';
import { GetSectionHeaderWithHrefQuery } from '../../../../page-sections/application/queries/get-section-header-with-href/get-section-header-with-href.query';
import { GetSectionHeaderWithHrefResult } from '../../../../page-sections/application/queries/get-section-header-with-href/get-section-header-with-href.result';
import { GetSectionHeaderQuery } from '../../../../page-sections/application/queries/get-section-header/get-section-header.query';
import { GetSectionHeaderResult } from '../../../../page-sections/application/queries/get-section-header/get-section-header.result';
import { READ_REPOSITORY_TOKEN, ReadRepository } from '../../read.repository';
import { GetDimensionItemMainSectionQuery } from './get-dimension-item-main-section.query';
import { GetDimensionItemMainSectionResult } from './get-dimension-item-main-section.result';

@QueryHandler(GetDimensionItemMainSectionQuery)
export class GetDimensionItemMainSectionHandler
  implements IQueryHandler<GetDimensionItemMainSectionQuery>
{
  constructor(
    @Inject(READ_REPOSITORY_TOKEN)
    private readRepository: ReadRepository,
    private readonly queryBus: QueryBus,
  ) {}

  async execute({
    dimensionAlias,
    alias,
  }: GetDimensionItemMainSectionQuery): Promise<
    Result<NotFoundError, GetDimensionItemMainSectionResult>
  > {
    const parentLinkQuery = new GetSectionHeaderWithHrefQuery(dimensionAlias);

    const parentLink = await this.queryBus.execute<
      GetSectionHeaderWithHrefQuery,
      Result<Error, GetSectionHeaderWithHrefResult>
    >(parentLinkQuery);

    if (parentLink.isFailure()) {
      return failure(parentLink.value);
    }

    const headerQuery = new GetSectionHeaderQuery('dimensionItem');

    const header = await this.queryBus.execute<
      GetSectionHeaderQuery,
      Result<Error, GetSectionHeaderResult>
    >(headerQuery);

    if (header.isFailure()) {
      return failure(header.value);
    }

    const content = await this.readRepository.getDimensionItem(alias);

    if (content === null) {
      return failure(new NotFoundError('Елемент не знайдено'));
    }

    const headerWithParentLink: SectionHeaderWithParentLinkDto = {
      headings: {
        primary: content.title,
        secondary: header.value.headings.secondary,
      },
      parentLink: parentLink.value,
    };

    return success({
      header: headerWithParentLink,
      content: content,
    });
  }
}
