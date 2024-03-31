import { ApiErrorDecorator, Public } from '@common/decorators';
import { Controller, Get, HttpStatus, NotFoundException } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { SectionNotFoundError } from '~/page-sections/application/errors/section-not-found.error';
import { GetHomeQuestionsSectionQuery } from '~/page-sections/application/queries/get-home-questions/get-home-questions-section.query';
import { GetHomeQuestionsSectionResult } from '~/page-sections/application/queries/get-home-questions/get-home-questions-section.result';
import { Result } from '~/shared/core/result';
import { GetHomeQuestionsSectionResponse } from './get-home-questions-section.response';

@Controller('pages')
@Public()
@ApiTags('pages')
export class GetHomeQuestionsSectionController {
  constructor(private readonly queryBus: QueryBus) {}

  @ApiResponse({
    status: 200,
    type: GetHomeQuestionsSectionResponse,
  })
  @ApiErrorDecorator(HttpStatus.NOT_FOUND, SectionNotFoundError.defaultMessage)
  @Get('home/questions')
  async handle() {
    const query = new GetHomeQuestionsSectionQuery();

    const data = await this.queryBus.execute<
      GetHomeQuestionsSectionQuery,
      Result<SectionNotFoundError, GetHomeQuestionsSectionResult>
    >(query);

    if (data.isFailure()) {
      throw new NotFoundException(data.value.message);
    }

    return new GetHomeQuestionsSectionResponse(data.value);
  }
}
