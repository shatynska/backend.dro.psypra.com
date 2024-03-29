import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryBus, QueryHandler } from '@nestjs/cqrs';
import { NotFoundError } from 'rxjs';
import { HeaderDto } from '~/section-headers/application/dto/header.dto';
import { GetHeaderQuery } from '~/section-headers/application/queries/get-header/get-header.query';
import { Result, failure, success } from '~/shared/core/result';
import { HomeQuestionsDto } from '../../dto/home-questions/home-questions.dto';
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
    private readonly queryBus: QueryBus,
  ) {}

  async execute(): Promise<Result<SectionNotFoundError, HomeQuestionsDto>> {
    const headerQuery = new GetHeaderQuery('home', 'questions');

    const header = await this.queryBus.execute<
      GetHeaderQuery,
      Result<NotFoundError, HeaderDto>
    >(headerQuery);

    if (header.isFailure()) {
      return failure(header.value);
    }

    const contentItems =
      await this.readRepository.getHomeQuestionsContentItems();

    return success({
      header: header.value,
      content: { items: contentItems },
    });
  }
}
