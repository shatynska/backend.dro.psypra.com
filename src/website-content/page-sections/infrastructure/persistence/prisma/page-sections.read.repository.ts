import { Injectable } from '@nestjs/common';
import { PageSectionDto } from 'src/website-content/page-sections/application/dto/page-section.dto';
import { PrismaService } from '~/shared/infrastructure/prisma/prisma.service';
import { PageSectionMapper } from './mappers/page-section.mapper';

@Injectable()
export class PrismaPageSectionsReadRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getPageSectionByAlias({
    page,
    section,
  }: {
    page: string;
    section: string;
  }): Promise<PageSectionDto | null> {
    const pageSection = await this.prismaService.pageSection.findUnique({
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
        parentId: true,
      },
    });

    if (!pageSection) {
      return null;
    }

    return PageSectionMapper.mapToDto(pageSection);
  }
}
