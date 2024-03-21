import { Prisma } from '@prisma/client';
import { HeaderWithParentLinkDto } from '../../../../application/dto/section/header-with-parent-link.dto';
import { PrismaReadRepository } from '../read.repository';

type Props = Prisma.PageSectionGetPayload<
  typeof PrismaReadRepository.headerWithParentLink
>;

export class HeaderWithParentLinkMapper {
  static mapToDto(data: Props): HeaderWithParentLinkDto {
    const mappedData = {
      primaryHeading: data.primaryHeading,
      secondaryHeading: data.secondaryHeading,
      parentLink: {
        primaryHeading: data.parent.primaryHeading,
        secondaryHeading: data.parent.secondaryHeading,
        href: data.parent.href,
      },
    };

    return mappedData;
  }
}
