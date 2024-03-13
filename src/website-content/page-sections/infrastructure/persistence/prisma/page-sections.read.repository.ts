import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PageSectionHeaderDto } from 'src/website-content/page-sections/application/dto/page-section-header.dto';
import { GetPageSectionByAliasParametersDto } from '~/page-sections/application/dto/get-page-section-by-alias-parameters.dto';
import { PageSectionsReadRepository } from '~/page-sections/application/page-sections.read.repository';
import { PrismaService } from '~/shared/infrastructure/prisma/prisma.service';
import { PageSectionHeaderWithParentLinkMapper } from './mappers/page-section-header-with-parent-link.mapper.';
import { PageSectionHeaderMapper } from './mappers/page-section-header.mapper';

@Injectable()
export class PrismaPageSectionsReadRepository
  implements PageSectionsReadRepository
{
  constructor(private readonly prismaService: PrismaService) {}

  async getPageSectionHeaderByAlias({
    page,
    section,
  }: GetPageSectionByAliasParametersDto): Promise<PageSectionHeaderDto | null> {
    const header = await this.prismaService.pageSection.findUnique({
      where: {
        alias: {
          page: page,
          section: section,
        },
      },
      select: {
        primaryHeading: true,
        secondaryHeading: true,
        href: true,
      },
    });

    if (!header) {
      return null;
    }

    return PageSectionHeaderMapper.mapToDto(header);
  }

  async getPageSectionHeaderWithParentLinkByAlias({
    page,
    section,
  }: GetPageSectionByAliasParametersDto): Promise<PageSectionHeaderDto | null> {
    const header = await this.prismaService.pageSection.findUnique({
      where: {
        alias: {
          page: page,
          section: section,
        },
      },
      select: PrismaPageSectionsReadRepository.pageSectionWithParentSelect,
    });

    if (!header) {
      return null;
    }

    return PageSectionHeaderWithParentLinkMapper.mapToDto(header);
  }

  static pageSectionWithParentSelect =
    Prisma.validator<Prisma.PageSectionSelect>()({
      primaryHeading: true,
      secondaryHeading: true,
      parent: {
        select: {
          primaryHeading: true,
          secondaryHeading: true,
          href: true,
        },
      },
    });

  static pageSectionWithParent =
    Prisma.validator<Prisma.PageSectionDefaultArgs>()({
      select: PrismaPageSectionsReadRepository.pageSectionWithParentSelect,
    });
}
