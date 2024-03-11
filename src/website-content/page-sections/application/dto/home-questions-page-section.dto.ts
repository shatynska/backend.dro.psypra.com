import { PageSectionDto } from './page-section.dto';

export class HomeQuestionsPageSectionDto extends PageSectionDto {
  data: {
    items: {
      title: string;
      href: string;
    }[];
  };
}
