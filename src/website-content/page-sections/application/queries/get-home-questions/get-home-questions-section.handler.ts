import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Result, success } from '~/shared/core/result';
import { READ_REPOSITORY_TOKEN, ReadRepository } from '../../read.repository';
import { GetHomeQuestionsSectionQuery } from './get-home-questions-section.query';
import { GetHomeQuestionsSectionResult } from './get-home-questions-section.result';

@QueryHandler(GetHomeQuestionsSectionQuery)
export class GetHomeQuestionsSectionHandler
  implements IQueryHandler<GetHomeQuestionsSectionQuery>
{
  constructor(
    @Inject(READ_REPOSITORY_TOKEN)
    private readRepository: ReadRepository,
  ) {}

  async execute(): Promise<Result<Error, GetHomeQuestionsSectionResult>> {
    const header = await this.readRepository.getSectionHeader('questions');

    const content = await this.readRepository.getHomeQuestions();

    return success({
      header: header,
      content: content,
    });
  }
}
