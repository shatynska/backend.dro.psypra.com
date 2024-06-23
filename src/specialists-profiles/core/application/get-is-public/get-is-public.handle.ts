import { Inject, InternalServerErrorException } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { QUERIES_REPOSITORY_TOKEN, QueriesRepository } from '../shared';
import { GetIsPublicQuery } from './get-is-public.query';
import { GetIsPublicResult } from './get-is-public.result';

@QueryHandler(GetIsPublicQuery)
export class GetIsPublicHandler implements IQueryHandler<GetIsPublicQuery> {
  constructor(
    @Inject(QUERIES_REPOSITORY_TOKEN)
    private repository: QueriesRepository,
  ) {}

  async execute({ parameters }: GetIsPublicQuery): Promise<GetIsPublicResult> {
    const data = await this.repository.getIsPublic(parameters);

    if (!data) {
      throw new InternalServerErrorException();
    }

    return data;
  }
}
