import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryBus, QueryHandler } from '@nestjs/cqrs';
import { DimensionDto } from '~/dimensions/application/dto/get-dimension/dimension.dto';
import { GetDimensionQuery } from '~/dimensions/application/queries/get-dimension/get-dimension.query';
import { NotFoundError } from '~/shared/application/errors/not-found.error';
import { Result, failure, success } from '~/shared/core/result';
import { HomeDimensionDto } from '../../dto/home-dimension/home-dimension.dto';
import { HeaderWithHrefDto } from '../../dto/section/header-with-href.dto';
import { SectionNotFoundError } from '../../errors/section-not-found.error';
import { READ_REPOSITORY_TOKEN, ReadRepository } from '../../read.repository';
import { GetHomeDimensionQuery } from './get-home-dimension.query';

@QueryHandler(GetHomeDimensionQuery)
export class GetHomeDimensionHandler
  implements IQueryHandler<GetHomeDimensionQuery>
{
  constructor(
    @Inject(READ_REPOSITORY_TOKEN)
    private readRepository: ReadRepository,
    private readonly queryBus: QueryBus,
  ) {}

  async execute({
    parameters: { dimensionAlias },
  }: GetHomeDimensionQuery): Promise<Result<NotFoundError, HomeDimensionDto>> {
    const header: HeaderWithHrefDto | null =
      await this.readRepository.getHeader({
        pageAlias: 'home',
        sectionAlias: dimensionAlias,
      });

    if (header === null) {
      return failure(new SectionNotFoundError());
    }

    const dimension: Result<NotFoundError, DimensionDto> =
      await this.queryBus.execute(
        new GetDimensionQuery({ alias: dimensionAlias }),
      );

    if (dimension.isFailure()) {
      return failure(dimension.value);
    }

    return success({
      header: header,
      content: { items: dimension.value.items },
    });
  }
}
