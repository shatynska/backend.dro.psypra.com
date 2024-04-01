import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { NotFoundError } from '~/shared/application/errors/not-found.error';
import { Result, failure, success } from '~/shared/core/result';
import { READ_REPOSITORY_TOKEN, ReadRepository } from '../../read.repository';
import { GetHeaderWithHrefQuery } from './get-header-with-href.query';
import { GetHeaderWithHrefResult } from './get-header-with-href.result';

@QueryHandler(GetHeaderWithHrefQuery)
export class GetHeaderWithHrefHandler
  implements IQueryHandler<GetHeaderWithHrefQuery>
{
  constructor(
    @Inject(READ_REPOSITORY_TOKEN)
    private readRepository: ReadRepository,
  ) {}

  async execute({
    sectionAlias,
  }: GetHeaderWithHrefQuery): Promise<
    Result<NotFoundError, GetHeaderWithHrefResult>
  > {
    const data = await this.readRepository.getHeaderWithHref(sectionAlias);

    if (data === null) {
      return failure(new NotFoundError('Заголовок не знайдено'));
    }

    return success(data);
  }
}
