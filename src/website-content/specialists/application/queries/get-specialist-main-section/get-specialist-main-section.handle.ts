import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryBus, QueryHandler } from '@nestjs/cqrs';
import { SectionHeaderWithParentLinkDto } from '~/page-sections/application/dto/section-header-with-parent-link.dto';
import { GetSectionHeaderWithHrefQuery } from '~/page-sections/application/queries/get-section-header-with-href/get-section-header-with-href.query';
import { GetSectionHeaderWithHrefResult } from '~/page-sections/application/queries/get-section-header-with-href/get-section-header-with-href.result';
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
    Result<Error, GetSpecialistMainSectionResult>
  > {
    const parentLinkQuery = new GetSectionHeaderWithHrefQuery('specialists');

    const parentLink = await this.queryBus.execute<
      GetSectionHeaderWithHrefQuery,
      Result<Error, GetSectionHeaderWithHrefResult>
    >(parentLinkQuery);

    if (parentLink.isFailure()) {
      return failure(parentLink.value);
    }

    const content = await this.readRepository.getSpecialistMain(alias);

    if (content === null) {
      return failure(new SpecialistNotFoundError());
    }

    const header: SectionHeaderWithParentLinkDto = {
      headings: {
        primary: `${content.firstName} ${content.lastName}`,
        secondary: content.specialties.join(', '),
      },
      parentLink: parentLink.value,
    };

    return success({
      header: header,
      content: content,
    });
  }
}
