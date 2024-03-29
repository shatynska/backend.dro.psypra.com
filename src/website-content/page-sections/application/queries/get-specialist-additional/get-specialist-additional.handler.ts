import { IQueryHandler, QueryBus, QueryHandler } from '@nestjs/cqrs';
import { HeaderDto } from '~/section-headers/application/dto/header.dto';
import { GetHeaderQuery } from '~/section-headers/application/queries/get-header/get-header.query';
import { NotFoundError } from '~/shared/application/errors/not-found.error';
import { Result, failure, success } from '~/shared/core/result';
import { GetBriefQuery } from '~/specialists/application/queries/get-brief/get-brief.query';
import { SpecialistAdditionalDto } from '../../dto/specialist-additional.dto';
import { GetSpecialistAdditionalQuery } from './get-specialist-additional.query';

@QueryHandler(GetSpecialistAdditionalQuery)
export class GetSpecialistAdditionalHandler
  implements IQueryHandler<GetSpecialistAdditionalQuery>
{
  constructor(private readonly queryBus: QueryBus) {}

  async execute({
    specialistAlias,
    sectionAlias,
  }: GetSpecialistAdditionalQuery): Promise<
    Result<NotFoundError, SpecialistAdditionalDto>
  > {
    const headerQuery = new GetHeaderQuery('specialist', sectionAlias);

    const header = await this.queryBus.execute<
      GetHeaderQuery,
      Result<NotFoundError, HeaderDto>
    >(headerQuery);

    if (header.isFailure()) {
      return failure(header.value);
    }

    const queryMap = new Map([['brief', GetBriefQuery]]);

    const contentQuery = queryMap.get(sectionAlias);

    const content = await this.queryBus.execute(
      new contentQuery(specialistAlias),
    );

    if (content.isFailure()) {
      return failure(content.value);
    }

    return success({
      header: header.value,
      content: content.value,
    });
  }
}
