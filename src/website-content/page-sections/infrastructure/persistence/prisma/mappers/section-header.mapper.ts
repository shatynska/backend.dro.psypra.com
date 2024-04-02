import { PageSection } from '@prisma/client';
import { SectionHeaderDto } from '~/page-sections/application/dto/section-header.dto';

type Parameters = Pick<PageSection, 'primaryHeading' | 'secondaryHeading'>;

export class SectionHeaderMapper {
  static mapToDto({
    primaryHeading,
    secondaryHeading,
  }: Parameters): SectionHeaderDto {
    return {
      headings: {
        primary: primaryHeading,
        secondary: secondaryHeading,
      },
    };
  }
}
