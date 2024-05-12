import { ApiProperty } from '@nestjs/swagger';
import {
  HomeQuestionsDto,
  homeQuestionsDtoStub,
} from '../../../../application/dto/home-questions.dto';
import {
  SectionHeaderDto,
  sectionHeaderDtoStubs,
} from '../../../../application/dto/section-header.dto';
import { GetHomeQuestionsSectionResult } from '../../../../application/queries/get-home-questions/get-home-questions-section.result';

export class GetHomeQuestionsSectionResponse
  implements GetHomeQuestionsSectionResult
{
  @ApiProperty({
    type: () => SectionHeaderDto,
    example: sectionHeaderDtoStubs[0],
  })
  header!: SectionHeaderDto;

  @ApiProperty({
    type: () => HomeQuestionsDto,
    example: homeQuestionsDtoStub[0],
  })
  content!: HomeQuestionsDto;

  constructor(section: GetHomeQuestionsSectionResult) {
    Object.assign(this, section);
  }
}
