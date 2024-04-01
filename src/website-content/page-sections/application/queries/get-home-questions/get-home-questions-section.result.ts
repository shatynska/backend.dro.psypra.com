import { SectionHeaderDto } from '~/page-sections/application/dto/section-header.dto';
import { HomeQuestionsDto } from '../../dto/home-questions.dto';
import { SectionDto } from '../../dto/section.dto';

export class GetHomeQuestionsSectionResult extends SectionDto<
  SectionHeaderDto,
  HomeQuestionsDto
> {}
