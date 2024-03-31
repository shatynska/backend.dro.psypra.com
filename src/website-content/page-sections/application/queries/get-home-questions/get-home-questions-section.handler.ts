import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryBus, QueryHandler } from '@nestjs/cqrs';
import { NotFoundError } from 'rxjs';
import { HeaderDto } from '~/section-headers/application/dto/header.dto';
import { GetHeaderQuery } from '~/section-headers/application/queries/get-header/get-header.query';
import { Result, failure, success } from '~/shared/core/result';
import { SectionNotFoundError } from '../../errors/section-not-found.error';
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

  async execute(): Promise<
    Result<SectionNotFoundError, GetHomeQuestionsSectionResult>
  > {
    const headerQuery = new GetHeaderQuery('home', 'questions');

    const header = await this.queryBus.execute<
      GetHeaderQuery,
      Result<NotFoundError, HeaderDto>
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
