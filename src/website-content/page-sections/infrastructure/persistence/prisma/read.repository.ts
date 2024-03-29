import { Injectable } from '@nestjs/common';
import { HomeQuestionsContentItemDto } from '~/page-sections/application/dto/home-questions/home-questions-content-item.dto';
import { ReadRepository } from '~/page-sections/application/read.repository';
import { PrismaService } from '~/shared/infrastructure/prisma/prisma.service';
import { HomeQuestionsContentItemsMapper } from './mappers/home-questions-content-items.mapper';

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
}
