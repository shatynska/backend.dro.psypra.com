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
import { NotFoundError } from '~/shared/application/errors/not-found.error';
import { Result } from '~/shared/core/result';
import { SectionNotFoundError } from '../../../../application/errors/section-not-found.error';
import { GetSectionHeaderWithHrefQuery } from '../../../../application/queries/get-section-header-with-href/get-section-header-with-href.query';
import { GetSectionHeaderWithHrefResult } from '../../../../application/queries/get-section-header-with-href/get-section-header-with-href.result';
import { GetSectionHeaderWithHrefResponse } from './get-section-header-with-href.response';

@Controller('pages')
@Public()
@ApiTags('pages')
export class GetSectionHeaderWithHrefController {
  constructor(private readonly queryBus: QueryBus) {}

  @ApiResponse({
    status: 200,
    type: GetSectionHeaderWithHrefResponse,
  })
  @ApiErrorDecorator(HttpStatus.NOT_FOUND, SectionNotFoundError.defaultMessage)
  @Get('sections/:section/header')
  async handle(@Param('section') section: string) {
    const query = new GetSectionHeaderWithHrefQuery(section);

    const data = await this.queryBus.execute<
      GetSectionHeaderWithHrefQuery,
      Result<NotFoundError, GetSectionHeaderWithHrefResult>
    >(query);

    if (data.isFailure()) {
      throw new NotFoundException(data.value.message);
    }

    return new GetSectionHeaderWithHrefResponse(data.value);
  }
}
