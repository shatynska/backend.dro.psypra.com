import { HomeQuestionsPageSectionContentItemDto } from './home-questions-page-section-content-item.dto copy';
import { PageSectionDto } from './page-section.dto';

export class HomeQuestionsPageSectionDto extends PageSectionDto {
  pageSectionContent: {
    items: HomeQuestionsPageSectionContentItemDto[];
  };
}
