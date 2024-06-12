import { Inject, InternalServerErrorException } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { QUERIES_REPOSITORY_TOKEN, QueriesRepository } from '../shared';
import { GetCoreQuery } from './get-core.query';
import { GetCoreResult } from './get-core.result';

@QueryHandler(GetCoreQuery)
export class GetCoreHandler implements IQueryHandler<GetCoreQuery> {
  constructor(
    @Inject(QUERIES_REPOSITORY_TOKEN)
    private repository: QueriesRepository,
  ) {}

  async execute({ parameters }: GetCoreQuery): Promise<GetCoreResult> {
    const data = await this.repository.getCore(parameters);

    if (!data) {
      throw new InternalServerErrorException();
    }

    return data;
  }
}
