import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryBus, QueryHandler } from '@nestjs/cqrs';
import { DimensionWithHrefDto } from '~/dimensions/application/dto/dimension-with-href.dto';
import { GetDimensionWithHrefQuery } from '~/dimensions/application/queries/get-dimension-with-href/get-dimension-with-href.query';
import { HeaderDto } from '~/section-headers/application/dto/header.dto';
import { GetHeaderQuery } from '~/section-headers/application/queries/get-header/get-header.query';
import { NotFoundError } from '~/shared/application/errors/not-found.error';
import { Result, failure, success } from '~/shared/core/result';
import {
  SpecialistBriefDimensionItemsDto,
  SpecialistBriefDto,
} from '../../dto/specialist-brief.dto';
import { SpecialistNotFoundError } from '../../errors/specialist-not-found.error';
import { READ_REPOSITORY_TOKEN, ReadRepository } from '../../read.repository';
import { GetSpecialistBriefSectionQuery } from './get-specialist-brief-section.query';
import { GetSpecialistBriefSectionResult } from './get-specialist-brief-section.result';

@QueryHandler(GetSpecialistBriefSectionQuery)
export class GetSpecialistBriefSectionHandler
  implements IQueryHandler<GetSpecialistBriefSectionQuery>
{
  constructor(
    @Inject(READ_REPOSITORY_TOKEN)
    private readRepository: ReadRepository,
    private readonly queryBus: QueryBus,
  ) {}

  async execute({
    alias,
  }: GetSpecialistBriefSectionQuery): Promise<
    Result<SpecialistNotFoundError, GetSpecialistBriefSectionResult>
  > {
    const headerQuery = new GetHeaderQuery('specialist', 'brief');

    const header = await this.queryBus.execute<
      GetHeaderQuery,
      Result<NotFoundError, HeaderDto>
    >(headerQuery);

    if (header.isFailure()) {
      return failure(header.value);
    }

    const dimensionAliases = [
      'specialties',
      'forms',
      'ages',
      'terms',
      'approaches',
      'rates',
    ];

    const dimensionsWithItems: SpecialistBriefDto = new SpecialistBriefDto();

    for (const dimensionAlias of dimensionAliases) {
      const dimension: Result<NotFoundError, DimensionWithHrefDto> =
        await this.queryBus.execute(
          new GetDimensionWithHrefQuery(dimensionAlias),
        );

      if (dimension.isFailure()) {
        return failure(dimension.value);
      }

      const items: SpecialistBriefDimensionItemsDto | null =
        await this.readRepository.getSpecialistBriefDimensionItems(
          alias,
          dimensionAlias,
        );

      dimensionsWithItems[dimensionAlias] = Object.assign(
        {},
        dimension.value,
        items,
      );
    }

    return success({
      header: header.value,
      content: dimensionsWithItems,
    });
  }
}
