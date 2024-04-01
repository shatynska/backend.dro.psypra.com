import { PageSection } from '@prisma/client';
import { SectionHeaderWithHrefDto } from '~/page-sections/application/dto/section-header-with-href.dto';

type Props = Pick<PageSection, 'primaryHeading' | 'secondaryHeading' | 'href'>;

export class SectionHeaderWithHrefMapper {
  static mapToDto(data: Props): SectionHeaderWithHrefDto {
    const mappedData = {
      headings: {
        primary: data.primaryHeading,
        secondary: data.secondaryHeading,
      },
      href: data.href,
    };

    return mappedData;
  }
}
