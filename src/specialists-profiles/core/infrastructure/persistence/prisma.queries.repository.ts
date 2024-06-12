import { Injectable } from '@nestjs/common';
import { PrismaService, SpecialistAliasDto } from '~/shared';
import { CoreDto, QueriesRepository } from '../../application';

@Injectable()
export class PrismaQueriesRepository implements QueriesRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async getCore({ alias }: SpecialistAliasDto): Promise<CoreDto | null> {
    const data = await this.prismaService.specialist.findUnique({
      where: {
        alias: alias,
      },
      select: {
        isPublic: true,
        firstName: true,
        lastName: true,
      },
    });

    return data;
  }
}
