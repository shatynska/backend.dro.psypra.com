import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { NotFoundError } from '~/shared/application/errors/not-found.error';
import { Result, failure, success } from '~/shared/core/result';
import { DimensionDto } from '../../dto/get-dimension/dimension.dto';
import { READ_REPOSITORY_TOKEN, ReadRepository } from '../../read.repository';
import { GetDimensionQuery } from './get-dimension.query';

@QueryHandler(GetDimensionQuery)
export class GetDimensionHandler implements IQueryHandler<GetDimensionQuery> {
  constructor(
    @Inject(READ_REPOSITORY_TOKEN)
    private readRepository: ReadRepository,
  ) {}

  async execute({
    parameters: { alias },
  }: GetDimensionQuery): Promise<Result<NotFoundError, DimensionDto>> {
    const dimension: DimensionDto = await this.readRepository.getDimension({
      alias: alias,
    });

    if (dimension === null) {
      return failure(new NotFoundError('Вимір не знайдено'));
    }

    return success(dimension);
  }
}
