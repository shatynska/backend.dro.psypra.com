import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { NotFoundError } from '~/shared/application/errors/not-found.error';
import { Result, failure, success } from '~/shared/core/result';
import { HeaderDto } from '../../dto/header.dto';
import { READ_REPOSITORY_TOKEN, ReadRepository } from '../../read.repository';
import { GetHeaderQuery } from './get-header.query';

@QueryHandler(GetHeaderQuery)
export class GetHeaderHandler implements IQueryHandler<GetHeaderQuery> {
  constructor(
    @Inject(READ_REPOSITORY_TOKEN)
    private readRepository: ReadRepository,
  ) {}

  async execute({
    pageAlias,
    sectionAlias,
  }: GetHeaderQuery): Promise<Result<NotFoundError, HeaderDto>> {
    const headerData = await this.readRepository.getHeader(
      pageAlias,
      sectionAlias,
    );

    if (headerData === null) {
      return failure(new NotFoundError('Заголовок не знайдено'));
    }

    return success(headerData);
  }
}
