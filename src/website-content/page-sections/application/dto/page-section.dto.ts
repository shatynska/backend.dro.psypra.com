export type Headings = {
  primary: string;
  secondary: string;
};

export type ParentLink = {
  headings: Headings;
  href: string;
};

export class PageSectionDto {
  headings: Headings;
  href?: string;
  parentId?: string;
}
