import { Injectable } from '@nestjs/common';
import { HeaderWithHrefDto } from '~/section-headers/application/dto/header-with-href.dto';
import { HeaderDto } from '~/section-headers/application/dto/header.dto';
import { ReadRepository } from '~/section-headers/application/read.repository';
import { PrismaService } from '~/shared/infrastructure/prisma/prisma.service';
import { HeaderWithHrefMapper } from './mappers/header-with-href.mapper';
import { HeaderMapper } from './mappers/header.mapper';

@Injectable()
export class PrismaReadRepository implements ReadRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getHeader(sectionAlias: string): Promise<HeaderDto | null> {
    const header = await this.prismaService.pageSection.findUnique({
      where: {
        alias: sectionAlias,
      },
      select: {
        primaryHeading: true,
        secondaryHeading: true,
      },
    });

    if (!header) {
      return null;
    }

    return HeaderMapper.mapToDto(header);
  }

  async getHeaderWithHref(
    sectionAlias: string,
  ): Promise<HeaderWithHrefDto | null> {
    const header = await this.prismaService.pageSection.findUnique({
      where: {
        alias: sectionAlias,
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

    return HeaderWithHrefMapper.mapToDto(header);
  }
}
