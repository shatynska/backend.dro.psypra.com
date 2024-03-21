import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryBus, QueryHandler } from '@nestjs/cqrs';
import { DimensionDto } from '~/dimensions/application/dto/get-dimension/dimension.dto';
import { GetDimensionQuery } from '~/dimensions/application/queries/get-dimension/get-dimension.query';
import { NotFoundError } from '~/shared/application/errors/not-found.error';
import { Result, failure, success } from '~/shared/core/result';
import { DimensionMainDto } from '../../dto/dimension-main/dimension-main.dto';
import { HeaderWithParentLinkDto } from '../../dto/section/header-with-parent-link.dto';
import { SectionNotFoundError } from '../../errors/section-not-found.error';
import { READ_REPOSITORY_TOKEN, ReadRepository } from '../../read.repository';
import { GetDimensionMainQuery } from './get-dimension-main.query';

@QueryHandler(GetDimensionMainQuery)
export class GetDimensionMainHandler
  implements IQueryHandler<GetDimensionMainQuery>
{
  constructor(
    @Inject(READ_REPOSITORY_TOKEN)
    private readRepository: ReadRepository,
    private readonly queryBus: QueryBus,
  ) {}

  async execute({
    parameters: { dimensionAlias },
  }: GetDimensionMainQuery): Promise<
    Result<SectionNotFoundError, DimensionMainDto>
  > {
    const headerData: HeaderWithParentLinkDto | null =
      await this.readRepository.getHeaderWithParentLink({
        pageAlias: 'dimension',
        sectionAlias: 'main',
      });

    if (headerData === null) {
      return failure(new SectionNotFoundError());
    }

    const contentData: Result<NotFoundError, DimensionDto> =
      await this.queryBus.execute(
        new GetDimensionQuery({ alias: dimensionAlias }),
      );

    if (contentData.isFailure()) {
      return failure(contentData.value);
    }

    headerData.primaryHeading = contentData.value.title;

    return success({
      header: headerData,
      content: { items: contentData.value.items },
    });
  }
}
