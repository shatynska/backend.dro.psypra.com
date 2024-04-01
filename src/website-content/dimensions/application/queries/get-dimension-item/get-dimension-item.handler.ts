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
import { GetDimensionItemQuery } from './get-dimension-item.query';
import { GetDimensionItemResult } from './get-dimension-item.result';

@QueryHandler(GetDimensionItemQuery)
export class GetDimensionItemHandler
  implements IQueryHandler<GetDimensionItemQuery>
{
  constructor(
    @Inject(READ_REPOSITORY_TOKEN)
    private readRepository: ReadRepository,
    private readonly queryBus: QueryBus,
  ) {}

  async execute({
    dimensionAlias,
    alias,
  }: GetDimensionItemQuery): Promise<
    Result<NotFoundError, GetDimensionItemResult>
  > {
    const parentLinkQuery = new GetHeaderWithHrefQuery(dimensionAlias);

    const parentLink = await this.queryBus.execute<
      GetHeaderWithHrefQuery,
      Result<Error, GetHeaderWithHrefResult>
    >(parentLinkQuery);

    if (parentLink.isFailure()) {
      return failure(parentLink.value);
    }

    const headerQuery = new GetHeaderQuery('dimensionItem');

    const header = await this.queryBus.execute<
      GetHeaderQuery,
      Result<Error, GetHeaderResult>
    >(headerQuery);

    if (header.isFailure()) {
      return failure(header.value);
    }

    const content = await this.readRepository.getDimensionItem(alias);

    if (content === null) {
      return failure(new NotFoundError('Елемент не знайдено'));
    }

    const headerWithParentLink: HeaderWithParentLinkDto = {
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
