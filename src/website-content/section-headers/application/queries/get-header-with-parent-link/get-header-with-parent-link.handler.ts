import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { NotFoundError } from '~/shared/application/errors/not-found.error';
import { Result, failure, success } from '~/shared/core/result';
import { HeaderWithParentLinkDto } from '../../dto/header-with-parent-link.dto';
import { READ_REPOSITORY_TOKEN, ReadRepository } from '../../read.repository';
import { GetHeaderWithParentLinkQuery } from './get-header-with-parent-link.query';

@QueryHandler(GetHeaderWithParentLinkQuery)
export class GetHeaderWithParentLinkHandler
  implements IQueryHandler<GetHeaderWithParentLinkQuery>
{
  constructor(
    @Inject(READ_REPOSITORY_TOKEN)
    private readRepository: ReadRepository,
  ) {}

  async execute({
    pageAlias,
    sectionAlias,
  }: GetHeaderWithParentLinkQuery): Promise<
    Result<NotFoundError, HeaderWithParentLinkDto>
  > {
    const headerData = await this.readRepository.getHeaderWithParentLink(
      pageAlias,
      sectionAlias,
    );

    if (headerData === null) {
      return failure(new NotFoundError('Заголовок не знайдено'));
    }

    return success(headerData);
  }
}
