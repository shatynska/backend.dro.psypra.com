import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { NotFoundError } from '~/shared/application/errors/not-found.error';
import { Result, failure, success } from '~/shared/core/result';
import { READ_REPOSITORY_TOKEN, ReadRepository } from '../../read.repository';
import { GetSectionHeaderQuery } from './get-section-header.query';
import { GetSectionHeaderResult } from './get-section-header.result';

@QueryHandler(GetSectionHeaderQuery)
export class GetSectionHeaderHandler
  implements IQueryHandler<GetSectionHeaderQuery>
{
  constructor(
    @Inject(READ_REPOSITORY_TOKEN)
    private readRepository: ReadRepository,
  ) {}

  async execute({
    sectionAlias,
  }: GetSectionHeaderQuery): Promise<
    Result<NotFoundError, GetSectionHeaderResult>
  > {
    const header = await this.readRepository.getSectionHeader(sectionAlias);

    if (header === null) {
      return failure(new NotFoundError('Заголовок не знайдено'));
    }

    return success(header);
  }
}
