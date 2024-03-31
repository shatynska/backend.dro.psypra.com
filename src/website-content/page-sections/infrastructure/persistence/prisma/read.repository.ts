import { Injectable } from '@nestjs/common';
import { HomeQuestionsDto } from '~/page-sections/application/dto/home-questions.dto';
import { ReadRepository } from '~/page-sections/application/read.repository';
import { PrismaService } from '~/shared/infrastructure/prisma/prisma.service';
import { HomeQuestionsMapper } from './mappers/home-questions.mapper';

@Injectable()
export class PrismaReadRepository implements ReadRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getHomeQuestions(): Promise<HomeQuestionsDto> {
    const sections = await this.prismaService.pageSection.findMany({
      where: { page: 'home', NOT: { section: 'questions' } },
      select: {
        secondaryHeading: true,
        href: true,
      },
    });

    return HomeQuestionsMapper.mapToDto(sections);
  }
}
