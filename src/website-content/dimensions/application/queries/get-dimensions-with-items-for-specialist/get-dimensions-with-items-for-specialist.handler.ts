import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { NotFoundError } from '~/shared/application/errors/not-found.error';
import { Result, failure, success } from '~/shared/core/result';
import { READ_REPOSITORY_TOKEN, ReadRepository } from '../../read.repository';
import { GetDimensionsWithItemsForSpecialistQuery } from './get-dimensions-with-items-for-specialist.query copy';
import { GetDimensionsWithItemsForSpecialistResult } from './get-dimensions-with-items-for-specialist.result';

@QueryHandler(GetDimensionsWithItemsForSpecialistQuery)
export class GetDimensionsWithItemsForSpecialistHandler
  implements IQueryHandler<GetDimensionsWithItemsForSpecialistQuery>
{
  constructor(
    @Inject(READ_REPOSITORY_TOKEN)
    private readRepository: ReadRepository,
  ) {}

  async execute({
    specialistAlias,
  }: GetDimensionsWithItemsForSpecialistQuery): Promise<
    Result<Error, GetDimensionsWithItemsForSpecialistResult>
  > {
    const dimensionsAliases = [
      'specialties',
      'forms',
      'ages',
      'terms',
      'approaches',
      'rates',
    ];

    const dimensions =
      await this.readRepository.getDimensionsWithItemsForSpecialist(
        dimensionsAliases,
        specialistAlias,
      );

    if (dimensions === null) {
      return failure(new NotFoundError('Виміри не знайдено'));
    }

    return success(dimensions);
  }
}
