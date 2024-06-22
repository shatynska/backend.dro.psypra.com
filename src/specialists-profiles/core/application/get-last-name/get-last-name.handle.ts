import { Inject, InternalServerErrorException } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { QUERIES_REPOSITORY_TOKEN, QueriesRepository } from '../shared';
import { GetLastNameQuery } from './get-last-name.query';
import { GetLastNameResult } from './get-last-name.result';

@QueryHandler(GetLastNameQuery)
export class GetLastNameHandler implements IQueryHandler<GetLastNameQuery> {
  constructor(
    @Inject(QUERIES_REPOSITORY_TOKEN)
    private repository: QueriesRepository,
  ) {}

  async execute({ parameters }: GetLastNameQuery): Promise<GetLastNameResult> {
    const data = await this.repository.getLastName(parameters);

    if (!data) {
      throw new InternalServerErrorException();
    }

    return data;
  }
}
