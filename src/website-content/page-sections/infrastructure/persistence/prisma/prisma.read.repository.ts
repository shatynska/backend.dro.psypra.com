import { Injectable } from '@nestjs/common';
import { PrismaService } from '~/shared/infrastructure/prisma/prisma.service';
import { HomeQuestionsDto } from '../../../application/dto/home-questions.dto';
import { SectionHeaderWithHrefDto } from '../../../application/dto/section-header-with-href.dto';
import { SectionHeaderDto } from '../../../application/dto/section-header.dto';
import { ReadRepository } from '../../../application/read.repository';
import { HomeQuestionsMapper } from './mappers/home-questions.mapper';
import { SectionHeaderWithHrefMapper } from './mappers/section-header-with-href.mapper';
import { SectionHeaderMapper } from './mappers/section-header.mapper';

@Injectable()
export class PrismaReadRepository implements ReadRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getHomeQuestions(): Promise<HomeQuestionsDto> {
    const sections = await this.prismaService.pageSection.findMany({
      where: {
        alias: {
          in: [
            'specialties',
            'specialists',
            'forms',
            'ages',
            'themes',
            'terms',
            'approaches',
            'rates',
            'locations',
            'schedules',
            'contacts',
          ],
        },
      },
      select: {
        secondaryHeading: true,
        href: true,
      },
    });

    return HomeQuestionsMapper.mapToDto(sections);
  }

  async getSectionHeader(
    sectionAlias: string,
  ): Promise<SectionHeaderDto | null> {
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

    return SectionHeaderMapper.mapToDto(header);
  }

  async getSectionHeaderWithHref(
    sectionAlias: string,
  ): Promise<SectionHeaderWithHrefDto | null> {
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

    return SectionHeaderWithHrefMapper.mapToDto(header);
  }
}
