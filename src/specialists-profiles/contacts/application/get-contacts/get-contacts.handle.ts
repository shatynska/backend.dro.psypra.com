import { Inject, InternalServerErrorException } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { QUERIES_REPOSITORY_TOKEN, QueriesRepository } from '../shared';
import { GetContactsQuery } from './get-contacts.query';
import { GetContactsResult } from './get-contacts.result';

@QueryHandler(GetContactsQuery)
export class GetContactsHandler implements IQueryHandler<GetContactsQuery> {
  constructor(
    @Inject(QUERIES_REPOSITORY_TOKEN)
    private repository: QueriesRepository,
  ) {}

  async execute({ parameters }: GetContactsQuery): Promise<GetContactsResult> {
    const data = await this.repository.GetContacts(parameters);

    // Consider another type of exception
    if (!data) {
      throw new InternalServerErrorException();
    }

    return data;
  }
}
