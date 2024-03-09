import { Headings, PageSectionDto } from './page-section.dto';

export class HomeQuestionsPageSectionDto implements PageSectionDto {
  headings: Headings;
  data: {
    items: {
      title: string;
      href: string;
    }[];
  };
}
