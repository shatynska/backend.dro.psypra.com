import { IQueryHandler, QueryBus, QueryHandler } from '@nestjs/cqrs';
import { GetDimensionsWithItemsForSpecialistQuery } from '~/dimensions/application/queries/get-dimensions-with-items-for-specialist/get-dimensions-with-items-for-specialist.query copy';
import { GetDimensionsWithItemsForSpecialistResult } from '~/dimensions/application/queries/get-dimensions-with-items-for-specialist/get-dimensions-with-items-for-specialist.result';
import { GetHeaderQuery } from '~/section-headers/application/queries/get-header/get-header.query';
import { GetHeaderResult } from '~/section-headers/application/queries/get-header/get-header.result';
import { Result, failure, success } from '~/shared/core/result';
import { GetSpecialistBriefSectionQuery } from './get-specialist-brief-section.query';
import { GetSpecialistBriefSectionResult } from './get-specialist-brief-section.result';

@QueryHandler(GetSpecialistBriefSectionQuery)
export class GetSpecialistBriefSectionHandler
  implements IQueryHandler<GetSpecialistBriefSectionQuery>
{
  constructor(private readonly queryBus: QueryBus) {}

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

    const contentQuery = new GetDimensionsWithItemsForSpecialistQuery(alias);

    const content = await this.queryBus.execute<
      GetDimensionsWithItemsForSpecialistQuery,
      Result<Error, GetDimensionsWithItemsForSpecialistResult>
    >(contentQuery);

    if (content.isFailure()) {
      return failure(content.value);
    }

    return success({
      header: header.value,
      content: content.value,
    });
  }
}
