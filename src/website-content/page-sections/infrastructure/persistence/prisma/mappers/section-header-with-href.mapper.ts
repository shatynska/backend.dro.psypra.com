import { PageSection } from '@prisma/client';
import { SectionHeaderWithHrefDto } from '~/page-sections/application/dto/section-header-with-href.dto';

type Parameters = Pick<
  PageSection,
  'primaryHeading' | 'secondaryHeading' | 'href'
>;

export class SectionHeaderWithHrefMapper {
  static mapToDto({
    href,
    primaryHeading,
    secondaryHeading,
  }: Parameters): SectionHeaderWithHrefDto {
    return {
      headings: {
        primary: primaryHeading,
        secondary: secondaryHeading,
      },
      href: href ?? '/',
    };
  }
}
