import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryBus, QueryHandler } from '@nestjs/cqrs';
import { DimensionWithHrefDto } from '~/dimensions/application/dto/dimension-with-href.dto';
import { GetDimensionWithHrefQuery } from '~/dimensions/application/queries/get-dimension-with-href/get-dimension-with-href.query';
import { GetHeaderQuery } from '~/section-headers/application/queries/get-header/get-header.query';
import { GetHeaderResult } from '~/section-headers/application/queries/get-header/get-header.result';
import { Result, failure, success } from '~/shared/core/result';
import {
  SpecialistBriefDimensionItemsDto,
  SpecialistBriefDto,
} from '../../dto/specialist-brief.dto';
import { SpecialistNotFoundError } from '../../errors/specialist-not-found.error';
import { READ_REPOSITORY_TOKEN, ReadRepository } from '../../read.repository';
import { GetSpecialistBriefSectionQuery } from './get-specialist-brief-section.query';
import { GetSpecialistBriefSectionResult } from './get-specialist-brief-section.result';
import { NotFoundError } from 'rxjs';

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
    Result<Error, GetSpecialistBriefSectionResult>
  > {
    const headerQuery = new GetHeaderQuery('brief');

    const header = await this.queryBus.execute<
      GetHeaderQuery,
      Result<Error, GetHeaderResult>
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
