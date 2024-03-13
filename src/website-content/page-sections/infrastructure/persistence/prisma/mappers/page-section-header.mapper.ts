import { PageSection } from '@prisma/client';
import { PageSectionHeaderDto } from 'src/website-content/page-sections/application/dto/page-section-header.dto';

export class PageSectionHeaderMapper {
  static mapToDto(
    params: Pick<PageSection, 'primaryHeading' | 'secondaryHeading' | 'href'>,
  ): PageSectionHeaderDto {
    const mappedData = {
      primaryHeading: params.primaryHeading,
      secondaryHeading: params.secondaryHeading,
      href: params.href,
    };

    return mappedData;
  }
}
