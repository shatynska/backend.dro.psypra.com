import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryBus, QueryHandler } from '@nestjs/cqrs';
import { NotFoundError } from '~/shared/application/errors/not-found.error';
import { Result, failure, success } from '~/shared/core/result';
import { MainDto } from '~/specialists/application/dto/main.dto';
import { GetMainQuery } from '~/specialists/application/queries/get-main/get-main.query';
import { HeaderWithParentLinkDto } from '../../dto/section/header-with-parent-link.dto';
import { SpecialistMainDto } from '../../dto/specialist-main/specialist-main.dto';
import { SectionNotFoundError } from '../../errors/section-not-found.error';
import { READ_REPOSITORY_TOKEN, ReadRepository } from '../../read.repository';
import { GetSpecialistMainQuery } from './get-specialist-main.query';

@QueryHandler(GetSpecialistMainQuery)
export class GetSpecialistMainHandler
  implements IQueryHandler<GetSpecialistMainQuery>
{
  constructor(
    @Inject(READ_REPOSITORY_TOKEN)
    private readRepository: ReadRepository,
    private readonly queryBus: QueryBus,
  ) {}

  async execute({
    specialistAlias,
  }: GetSpecialistMainQuery): Promise<
    Result<NotFoundError, SpecialistMainDto>
  > {
    const headerData: HeaderWithParentLinkDto | null =
      await this.readRepository.getHeaderWithParentLink('specialist', 'main');

    if (headerData === null) {
      return failure(new SectionNotFoundError());
    }

    const contentData: Result<NotFoundError, MainDto> =
      await this.queryBus.execute(new GetMainQuery(specialistAlias));

    if (contentData.isFailure()) {
      return failure(contentData.value);
    }

    headerData.primaryHeading = `${contentData.value.firstName} ${contentData.value.lastName}`;
    headerData.secondaryHeading = contentData.value.specialties.join(', ');

    return success({
      header: headerData,
      content: contentData.value,
    });
  }
}
