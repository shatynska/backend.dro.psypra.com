import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryBus, QueryHandler } from '@nestjs/cqrs';
import { NotFoundError } from '~/shared/application/errors/not-found.error';
import { Result, failure, success } from '~/shared/core/result';
import { BriefDto } from '~/specialists/application/dto/brief/brief.dto';
import { GetBriefQuery } from '~/specialists/application/queries/get-brief/get-brief.query';
import { HeaderDto } from '../../dto/section/header.dto';
import { SpecialistBriefDto } from '../../dto/specialist-brief/specialist-brief.dto';
import { SectionNotFoundError } from '../../errors/section-not-found.error';
import { READ_REPOSITORY_TOKEN, ReadRepository } from '../../read.repository';
import { GetSpecialistBriefQuery } from './get-specialist-brief.query';

@QueryHandler(GetSpecialistBriefQuery)
export class GetSpecialistBriefHandler
  implements IQueryHandler<GetSpecialistBriefQuery>
{
  constructor(
    @Inject(READ_REPOSITORY_TOKEN)
    private readRepository: ReadRepository,
    private readonly queryBus: QueryBus,
  ) {}

  async execute({
    parameters: { specialistAlias },
  }: GetSpecialistBriefQuery): Promise<
    Result<NotFoundError, SpecialistBriefDto>
  > {
    const headerData: HeaderDto | null = await this.readRepository.getHeader({
      pageAlias: 'specialist',
      sectionAlias: 'brief',
    });

    if (headerData === null) {
      return failure(new SectionNotFoundError());
    }

    const contentData: Result<NotFoundError, BriefDto> =
      await this.queryBus.execute(new GetBriefQuery(specialistAlias));

    if (contentData.isFailure()) {
      return failure(contentData.value);
    }

    return success({
      header: headerData,
      content: contentData.value,
    });
  }
}
