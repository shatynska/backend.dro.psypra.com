import { Prisma } from '@prisma/client';
import { PageSectionHeaderDto } from '~/page-sections/application/dto/page-section-header.dto';
import { PrismaPageSectionsReadRepository } from '../page-sections.read.repository';

type Props = Prisma.PageSectionGetPayload<
  typeof PrismaPageSectionsReadRepository.pageSectionWithParent
>;

export class PageSectionHeaderWithParentLinkMapper {
  static mapToDto(data: Props): PageSectionHeaderDto {
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
