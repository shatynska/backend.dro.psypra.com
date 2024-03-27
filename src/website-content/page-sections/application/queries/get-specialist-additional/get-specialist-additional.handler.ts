import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryBus, QueryHandler } from '@nestjs/cqrs';
import { NotFoundError } from '~/shared/application/errors/not-found.error';
import { Result, failure, success } from '~/shared/core/result';
import { GetBriefQuery } from '~/specialists/application/queries/get-brief/get-brief.query';
import { SpecialistAdditionalDto } from '../../dto/specialist-additional.dto';
import { SectionNotFoundError } from '../../errors/section-not-found.error';
import { READ_REPOSITORY_TOKEN, ReadRepository } from '../../read.repository';
import { GetSpecialistAdditionalQuery } from './get-specialist-additional.query';

@QueryHandler(GetSpecialistAdditionalQuery)
export class GetSpecialistAdditionalHandler
  implements IQueryHandler<GetSpecialistAdditionalQuery>
{
  constructor(
    @Inject(READ_REPOSITORY_TOKEN)
    private readRepository: ReadRepository,
    private readonly queryBus: QueryBus,
  ) {}

  async execute({
    specialistAlias,
    sectionAlias,
  }: GetSpecialistAdditionalQuery): Promise<
    Result<NotFoundError, SpecialistAdditionalDto>
  > {
    const headerData = await this.readRepository.getHeader(
      'specialist',
      sectionAlias,
    );

    if (headerData === null) {
      return failure(new SectionNotFoundError());
    }

    const queryMap = new Map([['brief', GetBriefQuery]]);

    const query = queryMap.get(sectionAlias);

    const contentData = await this.queryBus.execute(new query(specialistAlias));

    if (contentData.isFailure()) {
      return failure(contentData.value);
    }

    return success({
      header: headerData,
      content: contentData.value,
    });
  }
}
