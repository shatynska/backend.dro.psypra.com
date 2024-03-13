import { PageSectionDto } from './page-section.dto';

export class HomeQuestionsPageSectionDto extends PageSectionDto {
  pageSectionContent: {
    items: {
      title: string;
      href: string;
    }[];
  };
}
