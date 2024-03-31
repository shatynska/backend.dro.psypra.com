import { ApiErrorDecorator, Public } from '@common/decorators';
import {
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { SectionNotFoundError } from '~/page-sections/application/errors/section-not-found.error';
import { GetHomeDimensionSectionResult } from '~/page-sections/application/queries/get-home-dimension/get-home-dimension-section.result';
import { GetHomeDimensionQuery } from '~/page-sections/application/queries/get-home-dimension/get-home-dimension.query';
import { Result } from '~/shared/core/result';
import { GetHomeDimensionSectionResponse } from './get-home-dimension-section.response';

@Controller('pages')
@Public()
@ApiTags('pages')
export class GetHomeDimensionController {
  constructor(private readonly queryBus: QueryBus) {}

  @ApiResponse({
    status: 200,
    type: GetHomeDimensionSectionResponse,
  })
  @ApiErrorDecorator(HttpStatus.NOT_FOUND, SectionNotFoundError.defaultMessage)
  @Get('home/:dimension')
  async handle(@Param('dimension') dimension: string) {
    const query = new GetHomeDimensionQuery(dimension);

    const data = await this.queryBus.execute<
      GetHomeDimensionQuery,
      Result<SectionNotFoundError, GetHomeDimensionSectionResult>
    >(query);

    if (data.isFailure()) {
      throw new NotFoundException(data.value.message);
    }

    return new GetHomeDimensionSectionResponse(data.value);
  }
}
