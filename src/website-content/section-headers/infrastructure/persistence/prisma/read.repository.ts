import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { HeaderWithParentLinkDto } from '~/section-headers/application/dto/header-with-parent-link.dto';
import { HeaderDto } from '~/section-headers/application/dto/header.dto';
import { ReadRepository } from '~/section-headers/application/read.repository';
import { PrismaService } from '~/shared/infrastructure/prisma/prisma.service';
import { HeaderWithParentLinkMapper } from './mappers/header-with-parent-link.mapper.';
import { HeaderMapper } from './mappers/header.mapper';

@Injectable()
export class PrismaReadRepository implements ReadRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getHeader(
    pageAlias: string,
    sectionAlias: string,
  ): Promise<HeaderDto | null> {
    const header = await this.prismaService.pageSection.findUnique({
      where: {
        alias: {
          page: pageAlias,
          section: sectionAlias,
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

    return HeaderMapper.mapToDto(header);
  }

  async getHeaderWithParentLink(
    pageAlias: string,
    sectionAlias: string,
  ): Promise<HeaderWithParentLinkDto | null> {
    const header = await this.prismaService.pageSection.findUnique({
      where: {
        alias: {
          page: pageAlias,
          section: sectionAlias,
        },
      },
      select: PrismaReadRepository.headerWithParentLinkSelect,
    });

    if (!header) {
      return null;
    }

    return HeaderWithParentLinkMapper.mapToDto(header);
  }

  static headerWithParentLinkSelect =
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

  static headerWithParentLink =
    Prisma.validator<Prisma.PageSectionDefaultArgs>()({
      select: PrismaReadRepository.headerWithParentLinkSelect,
    });
}
