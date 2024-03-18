import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Result, failure, success } from '~/shared/core/result';
import { HeaderDto } from '../../dto/header.dto';
import { HomeQuestionsDto } from '../../dto/home-questions.dto';
import { SectionNotFoundError } from '../../errors/section-not-found.error';

import { READ_REPOSITORY_TOKEN, ReadRepository } from '../../read.repository';
import { GetHomeQuestionsQuery } from './get-home-questions.query';

@QueryHandler(GetHomeQuestionsQuery)
export class GetHomeQuestionsHandler
  implements IQueryHandler<GetHomeQuestionsQuery>
{
  constructor(
    @Inject(READ_REPOSITORY_TOKEN)
    private readRepository: ReadRepository,
  ) {}

  async execute(): Promise<Result<SectionNotFoundError, HomeQuestionsDto>> {
    const headerData: HeaderDto | null = await this.readRepository.getHeader({
      page: 'home',
      section: 'questions',
    });

    if (headerData === null) {
      return failure(new SectionNotFoundError());
    }

    const contentItems =
      await this.readRepository.getHomeQuestionsContentItems();

    return success({
      header: headerData,
      content: { items: contentItems },
    });
  }
}
