import { Inject, InternalServerErrorException } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { QUERIES_REPOSITORY_TOKEN, QueriesRepository } from '../shared';
import { GetFirstNameQuery } from './get-first-name.query';
import { GetFirstNameResult } from './get-first-name.result';

@QueryHandler(GetFirstNameQuery)
export class GetFirstNameHandler implements IQueryHandler<GetFirstNameQuery> {
  constructor(
    @Inject(QUERIES_REPOSITORY_TOKEN)
    private repository: QueriesRepository,
  ) {}

  async execute({
    parameters,
  }: GetFirstNameQuery): Promise<GetFirstNameResult> {
    const data = await this.repository.getFirstName(parameters);

    if (!data) {
      throw new InternalServerErrorException();
    }

    return data;
  }
}
