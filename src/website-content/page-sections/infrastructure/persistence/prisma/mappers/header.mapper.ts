import { PageSection } from '@prisma/client';
import { HeaderDto } from '~/page-sections/application/dto/header.dto';

type Props = Pick<PageSection, 'primaryHeading' | 'secondaryHeading' | 'href'>;

export class HeaderMapper {
  static mapToDto(data: Props): HeaderDto {
    const mappedData = {
      primaryHeading: data.primaryHeading,
      secondaryHeading: data.secondaryHeading,
      href: data.href,
    };

    return mappedData;
  }
}
