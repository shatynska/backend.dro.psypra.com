import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryBus, QueryHandler } from '@nestjs/cqrs';
import { HeaderWithParentLinkDto } from '~/section-headers/application/dto/header-with-parent-link.dto';
import { GetHeaderWithParentLinkQuery } from '~/section-headers/application/queries/get-header-with-parent-link/get-header-with-parent-link.query';
import { NotFoundError } from '~/shared/application/errors/not-found.error';
import { Result, failure, success } from '~/shared/core/result';
import { SpecialistNotFoundError } from '../../errors/specialist-not-found.error';
import { READ_REPOSITORY_TOKEN, ReadRepository } from '../../read.repository';
import { GetSpecialistMainSectionQuery } from './get-specialist-main-section.query';
import { GetSpecialistMainSectionResult } from './get-specialist-main-section.result';

@QueryHandler(GetSpecialistMainSectionQuery)
export class GetSpecialistMainSectionHandler
  implements IQueryHandler<GetSpecialistMainSectionQuery>
{
  constructor(
    @Inject(READ_REPOSITORY_TOKEN)
    private readRepository: ReadRepository,
    private readonly queryBus: QueryBus,
  ) {}

  async execute({
    alias,
  }: GetSpecialistMainSectionQuery): Promise<
    Result<SpecialistNotFoundError, GetSpecialistMainSectionResult>
  > {
    const content = await this.readRepository.getSpecialistMain(alias);

    if (content === null) {
      return failure(new SpecialistNotFoundError());
    }

    const headerQuery = new GetHeaderWithParentLinkQuery('specialist', 'main');

    const header = await this.queryBus.execute<
      GetHeaderWithParentLinkQuery,
      Result<NotFoundError, HeaderWithParentLinkDto>
    >(headerQuery);

    if (header.isFailure()) {
      return failure(header.value);
    }

    header.value.headings.primary = `${content.firstName} ${content.lastName}`;
    header.value.headings.secondary = content.specialties.join(', ');

    return success({
      header: header.value,
      content: content,
    });
  }
}
