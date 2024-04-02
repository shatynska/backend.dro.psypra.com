import { ApiErrorDecorator, Public } from '@common/decorators';
import { Controller, Get, HttpStatus, NotFoundException } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { SectionNotFoundError } from '~/page-sections/application/errors/section-not-found.error';
import { NotFoundError } from '~/shared/application/errors/not-found.error';
import { Result } from '~/shared/core/result';
import { GetSpecialistsQuery } from '~/specialists/application/queries/get-specialists/get-specialists.query';
import { GetSpecialistsResult } from '~/specialists/application/queries/get-specialists/get-specialists.result';
import { GetSpecialistsResponse } from './get-specialists.response';

@Controller('pages')
@Public()
@ApiTags('pages')
export class GetSpecialistsController {
  constructor(private readonly queryBus: QueryBus) {}

  @ApiResponse({
    status: 200,
    type: GetSpecialistsResponse,
  })
  @ApiErrorDecorator(HttpStatus.NOT_FOUND, SectionNotFoundError.defaultMessage)
  @Get('specialists')
  async handle() {
    const query = new GetSpecialistsQuery();

    const data = await this.queryBus.execute<
      GetSpecialistsQuery,
      Result<NotFoundError, GetSpecialistsResult>
    >(query);

    if (data.isFailure()) {
      throw new NotFoundException(data.value.message);
    }

    return new GetSpecialistsResponse(data.value);
  }
}
