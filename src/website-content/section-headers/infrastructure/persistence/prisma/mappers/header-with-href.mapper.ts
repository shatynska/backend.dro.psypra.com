import { PageSection } from '@prisma/client';
import { HeaderWithHrefDto } from '~/section-headers/application/dto/header-with-href.dto';

type Props = Pick<PageSection, 'primaryHeading' | 'secondaryHeading' | 'href'>;

export class HeaderWithHrefMapper {
  static mapToDto(data: Props): HeaderWithHrefDto {
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
