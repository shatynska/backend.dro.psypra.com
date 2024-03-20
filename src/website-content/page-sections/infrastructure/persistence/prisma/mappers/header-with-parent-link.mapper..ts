import { Prisma } from '@prisma/client';
import { HeaderDto } from '~/page-sections/application/dto/section/header.dto';
import { PrismaReadRepository } from '../read.repository';

type Props = Prisma.PageSectionGetPayload<
  typeof PrismaReadRepository.headerWithParentLink
>;

export class HeaderWithParentLinkMapper {
  static mapToDto(data: Props): HeaderDto {
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
