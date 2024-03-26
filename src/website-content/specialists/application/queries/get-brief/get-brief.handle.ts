import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryBus, QueryHandler } from '@nestjs/cqrs';
import { DimensionWithHrefDto } from '~/dimensions/application/dto/dimension-with-href/dimension-with-href.dto';
import { GetDimensionWithHrefQuery } from '~/dimensions/application/queries/get-dimension-with-href/get-dimension-with-href.query';
import { NotFoundError } from '~/shared/application/errors/not-found.error';
import { Result, failure, success } from '~/shared/core/result';
import { BriefDimensionItemsDto } from '../../dto/brief/brief-dimension-items.dto';
import { BriefDto } from '../../dto/brief/brief.dto';
import { SpecialistNotFoundError } from '../../errors/specialist-not-found.error';
import { READ_REPOSITORY_TOKEN, ReadRepository } from '../../read.repository';
import { GetBriefQuery } from './get-brief.query';

@QueryHandler(GetBriefQuery)
export class GetBriefHandler implements IQueryHandler<GetBriefQuery> {
  constructor(
    @Inject(READ_REPOSITORY_TOKEN)
    private readRepository: ReadRepository,
    private readonly queryBus: QueryBus,
  ) {}

  async execute({
    alias,
  }: GetBriefQuery): Promise<Result<SpecialistNotFoundError, BriefDto>> {
    const dimensionAliases = [
      'specialties',
      'forms',
      'ages',
      'terms',
      'approaches',
      'rates',
    ];

    const dimensionsWithItems: BriefDto = new BriefDto();

    for (const dimensionAlias of dimensionAliases) {
      const dimension: Result<NotFoundError, DimensionWithHrefDto> =
        await this.queryBus.execute(
          new GetDimensionWithHrefQuery(dimensionAlias),
        );

      if (dimension.isFailure()) {
        return failure(dimension.value);
      }

      const items: BriefDimensionItemsDto | null =
        await this.readRepository.getBriefDimensionItems(alias, dimensionAlias);

      dimensionsWithItems[dimensionAlias] = Object.assign(
        {},
        dimension.value,
        items,
      );
    }

    return success(dimensionsWithItems);
  }
}
