import { HeadingsDto } from './headings.dto';

export class PageSectionDto {
  headings: HeadingsDto;
  href?: string;
  parentId?: string;
}
