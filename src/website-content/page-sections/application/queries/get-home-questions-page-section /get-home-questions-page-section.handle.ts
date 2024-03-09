import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Result, failure, success } from '~/shared/core/result';
import { HomeQuestionsPageSectionDto } from '../../dto/home-questions-page-section.dto';
import { PageSectionDto } from '../../dto/page-section.dto';
import { PageSectionNotFoundError } from '../../errors/page-section-not-found.error';

import {
  PAGE_SECTIONS_READ_REPOSITORY_TOKEN,
  PageSectionsReadRepository,
} from '../../page-sections.read.repository';
import { GetHomeQuestionsPageSectionQuery } from './get-home-questions-page-section.query';

@QueryHandler(GetHomeQuestionsPageSectionQuery)
export class GetHomeQuestionsPageSectionHandler
  implements IQueryHandler<GetHomeQuestionsPageSectionQuery>
{
  constructor(
    @Inject(PAGE_SECTIONS_READ_REPOSITORY_TOKEN)
    private pageSectionsReadRepository: PageSectionsReadRepository,
  ) {}

  async execute(): Promise<
    Result<PageSectionNotFoundError, HomeQuestionsPageSectionDto>
  > {
    const section: PageSectionDto | null =
      await this.pageSectionsReadRepository.getPageSectionByAlias({
        page: 'home',
        section: 'questions',
      });

    if (section === null) {
      return failure(new PageSectionNotFoundError());
    }

    const result: HomeQuestionsPageSectionDto = {
      headings: section.headings,
      data: {
        items: [],
      },
    };

    return success(result);
  }
}
