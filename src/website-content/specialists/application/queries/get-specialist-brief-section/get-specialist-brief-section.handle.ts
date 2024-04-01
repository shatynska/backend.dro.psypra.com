import { IQueryHandler, QueryBus, QueryHandler } from '@nestjs/cqrs';
import { GetDimensionsWithItemsForSpecialistQuery } from '~/dimensions/application/queries/get-dimensions-with-items-for-specialist/get-dimensions-with-items-for-specialist.query copy';
import { GetDimensionsWithItemsForSpecialistResult } from '~/dimensions/application/queries/get-dimensions-with-items-for-specialist/get-dimensions-with-items-for-specialist.result';
import { GetSectionHeaderQuery } from '~/page-sections/application/queries/get-section-header/get-section-header.query';
import { GetSectionHeaderResult } from '~/page-sections/application/queries/get-section-header/get-section-header.result';
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
    const headerQuery = new GetSectionHeaderQuery('brief');

    const header = await this.queryBus.execute<
      GetSectionHeaderQuery,
      Result<Error, GetSectionHeaderResult>
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
