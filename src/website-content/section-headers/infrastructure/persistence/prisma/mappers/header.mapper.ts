import { PageSection } from '@prisma/client';
import { HeaderDto } from '~/section-headers/application/dto/header.dto';

type Props = Pick<PageSection, 'primaryHeading' | 'secondaryHeading'>;

export class HeaderMapper {
  static mapToDto(data: Props): HeaderDto {
    const mappedData = {
      headings: {
        primary: data.primaryHeading,
        secondary: data.secondaryHeading,
      },
    };

    return mappedData;
  }
}
