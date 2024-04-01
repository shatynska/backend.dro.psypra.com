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
import { GetDimensionItemMainSectionQuery } from '~/dimensions/application/queries/get-dimension-item-main-section/get-dimension-item-main-section.query';
import { GetDimensionItemMainSectionResult } from '~/dimensions/application/queries/get-dimension-item-main-section/get-dimension-item-main-section.result';
import { SectionNotFoundError } from '~/page-sections/application/errors/section-not-found.error';
import { Result } from '~/shared/core/result';
import { GetDimensionItemMainSectionResponse } from './get-dimension-item-main-section.response';

@Controller('pages')
@Public()
@ApiTags('pages')
export class GetDimensionItemMainSectionController {
  constructor(private readonly queryBus: QueryBus) {}

  @ApiResponse({
    status: 200,
    type: GetDimensionItemMainSectionResponse,
  })
  @ApiErrorDecorator(HttpStatus.NOT_FOUND, SectionNotFoundError.defaultMessage)
  @Get('dimensions/:dimension/:dimensionItem')
  async handle(
    @Param('dimension') dimension: string,
    @Param('dimensionItem') dimensionItem: string,
  ) {
    const query = new GetDimensionItemMainSectionQuery(
      dimension,
      dimensionItem,
    );

    const data = await this.queryBus.execute<
      GetDimensionItemMainSectionQuery,
      Result<SectionNotFoundError, GetDimensionItemMainSectionResult>
    >(query);

    if (data.isFailure()) {
      throw new NotFoundException(data.value.message);
    }

    return new GetDimensionItemMainSectionResponse(data.value);
  }
}
