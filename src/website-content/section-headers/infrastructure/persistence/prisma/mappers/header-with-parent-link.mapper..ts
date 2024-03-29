import { Prisma } from '@prisma/client';
import { HeaderWithParentLinkDto } from '~/section-headers/application/dto/header-with-parent-link.dto';
import { PrismaReadRepository } from '../read.repository';

type Props = Prisma.PageSectionGetPayload<
  typeof PrismaReadRepository.headerWithParentLink
>;

export class HeaderWithParentLinkMapper {
  static mapToDto(data: Props): HeaderWithParentLinkDto {
    const mappedData = {
      headings: {
        primary: data.primaryHeading,
        secondary: data.secondaryHeading,
      },
      parentLink: {
        headings: {
          primary: data.parent.primaryHeading,
          secondary: data.parent.secondaryHeading,
        },
        href: data.parent.href,
      },
    };

    return mappedData;
  }
}
