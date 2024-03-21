import { HeaderDto } from '../section/header.dto';
import { SectionDto } from '../section/section.dto';
import { HomeQuestionsContentItemDto } from './home-questions-content-item.dto';

export class HomeQuestionsDto extends SectionDto<HeaderDto> {
  content: {
    items: HomeQuestionsContentItemDto[];
  };
}
