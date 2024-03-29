import { HeaderDto } from '~/section-headers/application/dto/header.dto';
import { SectionDto } from '../section/section.dto';
import { HomeQuestionsContentItemDto } from './home-questions-content-item.dto';

export class HomeQuestionsDto extends SectionDto<HeaderDto> {
  content: {
    items: HomeQuestionsContentItemDto[];
  };
}
