import { HeaderDto } from '~/section-headers/application/dto/header.dto';
import { HomeQuestionsDto } from '../../dto/home-questions.dto';
import { SectionDto } from '../../dto/section.dto';

export class GetHomeQuestionsSectionResult extends SectionDto<
  HeaderDto,
  HomeQuestionsDto
> {}
