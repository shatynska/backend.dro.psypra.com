import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryBus, QueryHandler } from '@nestjs/cqrs';
import { GetHeaderQuery } from '~/section-headers/application/queries/get-header/get-header.query';
import { GetHeaderResult } from '~/section-headers/application/queries/get-header/get-header.result';
import { Result, failure, success } from '~/shared/core/result';
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
    private readonly queryBus: QueryBus,
  ) {}

  async execute(): Promise<Result<Error, GetHomeQuestionsSectionResult>> {
    const headerQuery = new GetHeaderQuery('questions');

    const header = await this.queryBus.execute<
      GetHeaderQuery,
      Result<Error, GetHeaderResult>
    >(headerQuery);

    if (header.isFailure()) {
      return failure(header.value);
    }

    const content = await this.readRepository.getHomeQuestions();

    return success({
      header: header.value,
      content: content,
    });
  }
}
