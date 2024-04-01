import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { NotFoundError } from '~/shared/application/errors/not-found.error';
import { Result, failure, success } from '~/shared/core/result';
import { READ_REPOSITORY_TOKEN, ReadRepository } from '../../read.repository';
import { GetSectionHeaderWithHrefQuery } from './get-section-header-with-href.query';
import { GetSectionHeaderWithHrefResult } from './get-section-header-with-href.result';

@QueryHandler(GetSectionHeaderWithHrefQuery)
export class GetSectionHeaderWithHrefHandler
  implements IQueryHandler<GetSectionHeaderWithHrefQuery>
{
  constructor(
    @Inject(READ_REPOSITORY_TOKEN)
    private readRepository: ReadRepository,
  ) {}

  async execute({
    sectionAlias,
  }: GetSectionHeaderWithHrefQuery): Promise<
    Result<NotFoundError, GetSectionHeaderWithHrefResult>
  > {
    const header =
      await this.readRepository.getSectionHeaderWithHref(sectionAlias);

    if (header === null) {
      return failure(new NotFoundError('Заголовок не знайдено'));
    }

    return success(header);
  }
}
