import { Inject, InternalServerErrorException } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { QUERIES_REPOSITORY_TOKEN, QueriesRepository } from '../shared';
import { GetAllQuery } from './get-all.query';
import { GetAllResult } from './get-all.result';

@QueryHandler(GetAllQuery)
export class GetAllHandler implements IQueryHandler<GetAllQuery> {
  constructor(
    @Inject(QUERIES_REPOSITORY_TOKEN)
    private repository: QueriesRepository,
  ) {}

  async execute({ parameters }: GetAllQuery): Promise<GetAllResult> {
    const data = await this.repository.getAll(parameters);

    // Consider another type of exception
    if (!data) {
      throw new InternalServerErrorException();
    }

    return data;
  }
}
