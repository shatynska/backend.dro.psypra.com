import { Injectable } from '@nestjs/common';
import { PrismaService, SpecialistAliasDto } from '~/shared';
import {
  CoreDto,
  GetFirstNameResult,
  GetLastNameResult,
  QueriesRepository,
} from '../../application';

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

  async getFirstName({
    alias,
  }: SpecialistAliasDto): Promise<GetFirstNameResult | null> {
    const data = await this.prismaService.specialist.findUnique({
      where: {
        alias: alias,
      },
      select: {
        firstName: true,
      },
    });

    return data;
  }

  async getLastName({
    alias,
  }: SpecialistAliasDto): Promise<GetLastNameResult | null> {
    const data = await this.prismaService.specialist.findUnique({
      where: {
        alias: alias,
      },
      select: {
        lastName: true,
      },
    });

    return data;
  }
}
