import { PageSection } from '@prisma/client';
import { PageSectionHeaderDto } from 'src/website-content/page-sections/application/dto/page-section-header.dto';

type Props = Pick<PageSection, 'primaryHeading' | 'secondaryHeading' | 'href'>;

export class PageSectionHeaderMapper {
  static mapToDto(data: Props): PageSectionHeaderDto {
    const mappedData = {
      primaryHeading: data.primaryHeading,
      secondaryHeading: data.secondaryHeading,
      href: data.href,
    };

    return mappedData;
  }
}
