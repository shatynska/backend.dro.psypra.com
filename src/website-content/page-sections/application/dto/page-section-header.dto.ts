export class PageSectionHeaderDto {
  primaryHeading: string;
  secondaryHeading: string;
  href?: string;
  parentLink?: Required<Omit<PageSectionHeaderDto, 'parentLink'>>;
}
