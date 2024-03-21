import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Result, failure, success } from '~/shared/core/result';
import { MainDto } from '../../dto/main.dto';
import { SpecialistNotFoundError } from '../../errors/specialist-not-found.error';
import { READ_REPOSITORY_TOKEN, ReadRepository } from '../../read.repository';
import { GetMainQuery } from './get-main.query';

@QueryHandler(GetMainQuery)
export class GetMainHandler implements IQueryHandler<GetMainQuery> {
  constructor(
    @Inject(READ_REPOSITORY_TOKEN)
    private readRepository: ReadRepository,
  ) {}

  async execute({
    parameters: { alias },
  }: GetMainQuery): Promise<Result<SpecialistNotFoundError, MainDto>> {
    const data: MainDto | null = await this.readRepository.getMain({ alias });

    if (data === null) {
      return failure(new SpecialistNotFoundError());
    }

    return success(data);
  }
}
