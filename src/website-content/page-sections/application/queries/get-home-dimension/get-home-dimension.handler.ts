import { IQueryHandler, QueryBus, QueryHandler } from '@nestjs/cqrs';
import { DimensionWithItemsDto } from '~/dimensions/application/dto/dimension-with-items.dto';
import { GetDimensionWithItemsQuery } from '~/dimensions/application/queries/get-dimension-with-items/get-dimension-with-items.query';
import { HeaderDto } from '~/section-headers/application/dto/header.dto';
import { GetHeaderQuery } from '~/section-headers/application/queries/get-header/get-header.query';
import { NotFoundError } from '~/shared/application/errors/not-found.error';
import { Result, failure, success } from '~/shared/core/result';
import { GetHomeDimensionQuery } from './get-home-dimension.query';
import { GetHomeDimensionSectionResult } from './get-home-dimension-section.result';

@QueryHandler(GetHomeDimensionQuery)
export class GetHomeDimensionHandler
  implements IQueryHandler<GetHomeDimensionQuery>
{
  constructor(private readonly queryBus: QueryBus) {}

  async execute({
    dimensionAlias,
  }: GetHomeDimensionQuery): Promise<
    Result<NotFoundError, GetHomeDimensionSectionResult>
  > {
    const headerQuery = new GetHeaderQuery('home', dimensionAlias);

    const header = await this.queryBus.execute<
      GetHeaderQuery,
      Result<NotFoundError, HeaderDto>
    >(headerQuery);

    if (header.isFailure()) {
      return failure(header.value);
    }

    const dimension: Result<NotFoundError, DimensionWithItemsDto> =
      await this.queryBus.execute(
        new GetDimensionWithItemsQuery(dimensionAlias),
      );

    if (dimension.isFailure()) {
      return failure(dimension.value);
    }

    return success({
      header: header.value,
      content: { items: dimension.value.items },
    });
  }
}
