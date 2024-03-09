import { PageSection } from '@prisma/client';
import { PageSectionDto } from 'src/website-content/page-sections/application/dto/page-section.dto';

export class PageSectionMapper {
  static mapToDto(
    params: Omit<PageSection, 'id' | 'page' | 'section'>,
  ): PageSectionDto {
    const mappedData = {
      headings: {
        primary: params.primaryHeading,
        secondary: params.secondaryHeading,
      },
      href: params.href,
      parentId: params.parentId,
    };

    return mappedData;
  }
}
