import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryBus, QueryHandler } from '@nestjs/cqrs';
import { HeaderWithParentLinkDto } from '~/section-headers/application/dto/header-with-parent-link.dto';
import { GetHeaderWithParentLinkQuery } from '~/section-headers/application/queries/get-header-with-parent-link/get-header-with-parent-link.query';
import { NotFoundError } from '~/shared/application/errors/not-found.error';
import { Result, failure, success } from '~/shared/core/result';
import { DimensionItemsDto } from '../../dto/dimension-items.dto';
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
    Result<NotFoundError, GetDimensionMainSectionResult>
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
