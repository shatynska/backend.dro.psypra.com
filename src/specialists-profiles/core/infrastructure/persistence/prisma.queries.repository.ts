import { Injectable } from '@nestjs/common';
import { PrismaService, SpecialistAliasDto } from '~/shared';
import {
  GetFirstNameResult,
  GetLastNameResult,
  QueriesRepository,
} from '../../application';
import { GetIsPublicResult } from '../../application/get-is-public';

@Injectable()
export class PrismaQueriesRepository implements QueriesRepository {
  constructor(private readonly prismaService: PrismaService) {}

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

  async getIsPublic({
    alias,
  }: SpecialistAliasDto): Promise<GetIsPublicResult | null> {
    const data = await this.prismaService.specialist.findUnique({
      where: {
        alias: alias,
      },
      select: {
        isPublic: true,
      },
    });

    return data;
  }
}
