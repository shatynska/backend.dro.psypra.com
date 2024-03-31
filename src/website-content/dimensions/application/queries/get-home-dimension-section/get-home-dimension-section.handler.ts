import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryBus, QueryHandler } from '@nestjs/cqrs';
import { HeaderDto } from '~/section-headers/application/dto/header.dto';
import { GetHeaderQuery } from '~/section-headers/application/queries/get-header/get-header.query';
import { NotFoundError } from '~/shared/application/errors/not-found.error';
import { Result, failure, success } from '~/shared/core/result';
import { DimensionItemsDto } from '../../dto/dimension-items.dto';
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

    const content: DimensionItemsDto =
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
