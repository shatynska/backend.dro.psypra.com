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
import { GetDimensionMainSectionResult } from '~/page-sections/application/queries/get-dimension-main/get-dimension-main-section.result';
import { GetDimensionMainQuery } from '~/page-sections/application/queries/get-dimension-main/get-dimension-main.query';
import { Result } from '~/shared/core/result';
import { GetDimensionMainSectionResponse } from './get-dimension-main-section.response';

@Controller('pages')
@Public()
@ApiTags('pages')
export class GetDimensionMainController {
  constructor(private readonly queryBus: QueryBus) {}

  @ApiResponse({
    status: 200,
    type: GetDimensionMainSectionResponse,
  })
  @ApiErrorDecorator(HttpStatus.NOT_FOUND, SectionNotFoundError.defaultMessage)
  @Get('dimensions/:dimension/main')
  async handle(@Param('dimension') dimension: string) {
    const query = new GetDimensionMainQuery(dimension);

    const data = await this.queryBus.execute<
      GetDimensionMainQuery,
      Result<SectionNotFoundError, GetDimensionMainSectionResult>
    >(query);

    if (data.isFailure()) {
      throw new NotFoundException(data.value.message);
    }

    return new GetDimensionMainSectionResponse(data.value);
  }
}
