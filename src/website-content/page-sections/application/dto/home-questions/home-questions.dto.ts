import { SectionDto } from '../section/section.dto';
import { HomeQuestionsContentItemDto } from './home-questions-content-item.dto';

export class HomeQuestionsDto extends SectionDto {
  content: {
    items: HomeQuestionsContentItemDto[];
  };
}
