import { ApiProperty } from '@nestjs/swagger';
import {
  HomeQuestionsDto,
  homeQuestionsDtoStub,
} from '~/page-sections/application/dto/home-questions.dto';
import { GetHomeQuestionsSectionResult } from '~/page-sections/application/queries/get-home-questions/get-home-questions-section.result';
import {
  HeaderDto,
  headerDtoStubs,
} from '~/section-headers/application/dto/header.dto';

export class GetHomeQuestionsSectionResponse
  implements GetHomeQuestionsSectionResult
{
  @ApiProperty({
    type: () => HeaderDto,
    example: headerDtoStubs[0],
  })
  header: HeaderDto;

  @ApiProperty({
    type: () => HomeQuestionsDto,
    example: homeQuestionsDtoStub[0],
  })
  content: HomeQuestionsDto;

  constructor(section: GetHomeQuestionsSectionResult) {
    Object.assign(this, section);
  }
}
