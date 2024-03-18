import { HomeQuestionsContentItemDto } from './home-questions-content-item.dto';
import { SectionDto } from './section.dto';

export class HomeQuestionsDto extends SectionDto {
  content: {
    items: HomeQuestionsContentItemDto[];
  };
}
