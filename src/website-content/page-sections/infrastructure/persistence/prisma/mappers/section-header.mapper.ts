import { PageSection } from '@prisma/client';
import { SectionHeaderDto } from '~/page-sections/application/dto/section-header.dto';

type Props = Pick<PageSection, 'primaryHeading' | 'secondaryHeading'>;

export class SectionHeaderMapper {
  static mapToDto(data: Props): SectionHeaderDto {
    const mappedData = {
      headings: {
        primary: data.primaryHeading,
        secondary: data.secondaryHeading,
      },
    };

    return mappedData;
  }
}
