import { HeaderDto } from '~/section-headers/application/dto/header.dto';
import { SectionDto } from '../section.dto';
import { HomeQuestionsContentItemDto } from './home-questions-content-item.dto';

export class HomeQuestionsDto extends SectionDto<HeaderDto, any> {
  content: {
    items: HomeQuestionsContentItemDto[];
  };
}
