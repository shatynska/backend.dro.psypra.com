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
import { GetDimensionMainSectionQuery } from '~/dimensions/application/queries/get-dimension-main-section/get-dimension-main-section.query';
import { GetDimensionMainSectionResult } from '~/dimensions/application/queries/get-dimension-main-section/get-dimension-main-section.result';
import { SectionNotFoundError } from '~/page-sections/application/errors/section-not-found.error';
import { Result } from '~/shared/core/result';
import { GetDimensionMainSectionResponse } from './get-dimension-main-section.response';

@Controller('pages')
@Public()
@ApiTags('pages')
export class GetDimensionMainSectionController {
  constructor(private readonly queryBus: QueryBus) {}

  @ApiResponse({
    status: 200,
    type: GetDimensionMainSectionResponse,
  })
  @ApiErrorDecorator(HttpStatus.NOT_FOUND, SectionNotFoundError.defaultMessage)
  @Get('dimensions/:dimension/main')
  async handle(@Param('dimension') dimension: string) {
    const query = new GetDimensionMainSectionQuery(dimension);

    const data = await this.queryBus.execute<
      GetDimensionMainSectionQuery,
      Result<SectionNotFoundError, GetDimensionMainSectionResult>
    >(query);

    if (data.isFailure()) {
      throw new NotFoundException(data.value.message);
    }

    return new GetDimensionMainSectionResponse(data.value);
  }
}
