import { ApiErrorDecorator, Public } from '@common/decorators';
import { Controller, Get, HttpStatus, NotFoundException } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { HomeQuestionsPageSectionDto } from '~/page-sections/application/dto/home-questions-page-section.dto';
import { PageSectionNotFoundError } from '~/page-sections/application/errors/page-section-not-found.error';
import { GetHomeQuestionsPageSectionQuery } from '~/page-sections/application/queries/get-home-questions-page-section/get-home-questions-page-section.query';
import { Result } from '~/shared/core/result';
import { HomeQuestionsPageSectionResponseDto } from '../../dto/responses/home-question-page-section/home-questions-page-section.response.dto';

@Controller('pages')
@Public()
@ApiTags('pages')
export class GetHomeQuestionsPageSectionController {
  constructor(private readonly queryBus: QueryBus) {}

  @ApiResponse({
    status: 200,
    type: HomeQuestionsPageSectionResponseDto,
  })
  @ApiErrorDecorator(
    HttpStatus.NOT_FOUND,
    PageSectionNotFoundError.defaultMessage,
  )
  @Get('home/questions')
  async execute(): Promise<HomeQuestionsPageSectionResponseDto> {
    const section: Result<
      PageSectionNotFoundError,
      HomeQuestionsPageSectionDto
    > = await this.queryBus.execute(new GetHomeQuestionsPageSectionQuery());

    if (section.isFailure()) {
      throw new NotFoundException(section.value.message);
    }

    return new HomeQuestionsPageSectionResponseDto(section.value);
  }
}
