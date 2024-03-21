import { PageSection } from '@prisma/client';
import { HeaderWithHrefDto } from '~/page-sections/application/dto/section/header-with-href.dto';

type Props = Pick<PageSection, 'primaryHeading' | 'secondaryHeading' | 'href'>;

export class HeaderMapper {
  static mapToDto(data: Props): HeaderWithHrefDto {
    const mappedData = {
      primaryHeading: data.primaryHeading,
      secondaryHeading: data.secondaryHeading,
      href: data.href,
    };

    return mappedData;
  }
}
