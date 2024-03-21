import { ApiErrorDecorator, Public } from '@common/decorators';
import { Controller, Get, HttpStatus, NotFoundException } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { HomeQuestionsDto } from '~/page-sections/application/dto/home-questions/home-questions.dto';
import { SectionNotFoundError } from '~/page-sections/application/errors/section-not-found.error';
import { GetHomeQuestionsQuery } from '~/page-sections/application/queries/get-home-questions/get-home-questions.query';
import { Result } from '~/shared/core/result';
import { HomeQuestionsResponseDto } from '../../dto/home-question/home-questions.response.dto';

@Controller('pages')
@Public()
@ApiTags('pages')
export class GetHomeQuestionsController {
  constructor(private readonly queryBus: QueryBus) {}

  @ApiResponse({
    status: 200,
    type: HomeQuestionsResponseDto,
  })
  @ApiErrorDecorator(HttpStatus.NOT_FOUND, SectionNotFoundError.defaultMessage)
  @Get('home/questions')
  async execute(): Promise<HomeQuestionsResponseDto> {
    const section: Result<SectionNotFoundError, HomeQuestionsDto> =
      await this.queryBus.execute(new GetHomeQuestionsQuery());

    if (section.isFailure()) {
      throw new NotFoundException(section.value.message);
    }

    return new HomeQuestionsResponseDto(section.value);
  }
}
