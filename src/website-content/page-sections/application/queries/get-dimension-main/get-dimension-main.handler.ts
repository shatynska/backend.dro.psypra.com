import { IQueryHandler, QueryBus, QueryHandler } from '@nestjs/cqrs';
import { DimensionWithItemsDto } from '~/dimensions/application/dto/dimension-with-items.dto';
import { GetDimensionWithItemsQuery } from '~/dimensions/application/queries/get-dimension-with-items/get-dimension-with-items.query';
import { HeaderWithParentLinkDto } from '~/section-headers/application/dto/header-with-parent-link.dto';
import { GetHeaderWithParentLinkQuery } from '~/section-headers/application/queries/get-header-with-parent-link/get-header-with-parent-link.query';
import { NotFoundError } from '~/shared/application/errors/not-found.error';
import { Result, failure, success } from '~/shared/core/result';
import { DimensionMainDto } from '../../dto/dimension-main/dimension-main.dto';
import { SectionNotFoundError } from '../../errors/section-not-found.error';
import { GetDimensionMainQuery } from './get-dimension-main.query';

@QueryHandler(GetDimensionMainQuery)
export class GetDimensionMainHandler
  implements IQueryHandler<GetDimensionMainQuery>
{
  constructor(private readonly queryBus: QueryBus) {}

  async execute({
    dimensionAlias,
  }: GetDimensionMainQuery): Promise<
    Result<SectionNotFoundError, DimensionMainDto>
  > {
    // TODO Refactor section database schema for more precise query
    const headerQuery = new GetHeaderWithParentLinkQuery(
      'home',
      dimensionAlias,
    );

    const header = await this.queryBus.execute<
      GetHeaderWithParentLinkQuery,
      Result<NotFoundError, HeaderWithParentLinkDto>
    >(headerQuery);

    if (header.isFailure()) {
      return failure(header.value);
    }

    const content: Result<NotFoundError, DimensionWithItemsDto> =
      await this.queryBus.execute(
        new GetDimensionWithItemsQuery(dimensionAlias),
      );

    if (content.isFailure()) {
      return failure(content.value);
    }

    return success({
      header: header.value,
      content: { items: content.value.items },
    });
  }
}
