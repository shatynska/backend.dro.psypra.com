import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '~/shared/infrastructure/prisma/prisma.service';
import { HomeQuestionsContentItemDto } from '../../../application/dto/home-questions/home-questions-content-item.dto';
import { GetSectionParametersDto } from '../../../application/dto/section/get-section-parameters.dto';
import { HeaderDto } from '../../../application/dto/section/header.dto';
import { ReadRepository } from '../../../application/read.repository';
import { HeaderWithParentLinkMapper } from './mappers/header-with-parent-link.mapper.';
import { HeaderMapper } from './mappers/header.mapper';
import { HomeQuestionsContentItemsMapper } from './mappers/home-questions-content-items.mapper';
import { HeaderWithParentLinkDto } from '~/page-sections/application/dto/section/header-with-parent-link.dto';

@Injectable()
export class PrismaReadRepository implements ReadRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getHomeQuestionsContentItems(): Promise<HomeQuestionsContentItemDto[]> {
    const sections = await this.prismaService.pageSection.findMany({
      where: { page: 'home', NOT: { section: 'questions' } },
      select: {
        secondaryHeading: true,
        href: true,
      },
    });

    return HomeQuestionsContentItemsMapper.mapToDto(sections);
  }

  async getHeader({
    page,
    section,
  }: GetSectionParametersDto): Promise<HeaderDto | null> {
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

    return HeaderMapper.mapToDto(header);
  }

  async getHeaderWithParentLink({
    page,
    section,
  }: GetSectionParametersDto): Promise<HeaderWithParentLinkDto | null> {
    const header = await this.prismaService.pageSection.findUnique({
      where: {
        alias: {
          page: page,
          section: section,
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
