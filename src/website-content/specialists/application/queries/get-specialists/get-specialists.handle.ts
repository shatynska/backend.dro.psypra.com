import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Result, success } from '~/shared/core/result';
import { READ_REPOSITORY_TOKEN, ReadRepository } from '../../read.repository';
import { GetSpecialistsQuery } from './get-specialists.query';
import { GetSpecialistsResult } from './get-specialists.result';

@QueryHandler(GetSpecialistsQuery)
export class GetSpecialistsHandler
  implements IQueryHandler<GetSpecialistsQuery>
{
  constructor(
    @Inject(READ_REPOSITORY_TOKEN)
    private readRepository: ReadRepository,
  ) {}

  async execute({}: GetSpecialistsQuery): Promise<
    Result<Error, GetSpecialistsResult>
  > {
    const specialists = await this.readRepository.getSpecialists();

    return success(specialists);
  }
}
