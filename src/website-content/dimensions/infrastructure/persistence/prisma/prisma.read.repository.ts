import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DimensionItemDto } from '~/dimensions/application/dto/dimension-item.dto';
import { DimensionItemsDto } from '~/dimensions/application/dto/dimension-items.dto';
import { DimensionsWithItemsForSpecialistDto } from '~/dimensions/application/dto/dimensions-with-items-for-specialist.dto';
import { ReadRepository } from '~/dimensions/application/read.repository';
import { PrismaService } from '~/shared/infrastructure/prisma/prisma.service';
import { DimensionItemMapper } from './mappers/dimension-item.mapper';
import { DimensionItemsByDimensionAliasMapper } from './mappers/dimension-items-by-dimension-alias.mapper';
import { DimensionsWithItemsForSpecialistMapper } from './mappers/dimensions-with-items-for-specialist.mapper';

@Injectable()
export class PrismaReadRepository implements ReadRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getDimensionItem(alias: string): Promise<DimensionItemDto | null> {
    const item = await this.prismaService.dimensionItem.findUnique({
      where: { alias: alias },
      select: {
        title: true,
        description: true,
      },
    });

    if (!item) {
      return null;
    }

    return DimensionItemMapper.mapToDto(item);
  }

  async getDimensionItemsByDimensionAlias(
    dimensionAlias: string,
  ): Promise<DimensionItemsDto | null> {
    const items = await this.prismaService.dimensionItem.findMany({
      where: { dimensionAlias: dimensionAlias },
      select: {
        alias: true,
        dimensionAlias: true,
        title: true,
        description: true,
      },
    });

    if (!items) {
      return null;
    }

    return DimensionItemsByDimensionAliasMapper.mapToDto(items);
  }

  async getDimensionsWithItemsForSpecialist(
    dimensionsAliases: string[],
    specialistAlias: string,
  ): Promise<DimensionsWithItemsForSpecialistDto | null> {
    const dimensions = await this.prismaService.dimension.findMany({
      where: {
        alias: {
          in: dimensionsAliases,
        },
      },
      select:
        PrismaReadRepository.getDimensionsWithItemsForSpecialistSelect(
          specialistAlias,
        ),
    });

    if (!dimensions) {
      return null;
    }

    return DimensionsWithItemsForSpecialistMapper.mapToDto(dimensions);
  }

  static getDimensionsWithItemsForSpecialistSelect = (
    specialistAlias: string,
  ) => {
    return Prisma.validator<Prisma.DimensionSelect>()({
      alias: true,
      title: true,
      dimensionItems: {
        where: {
          specialists: { some: { specialistAlias: specialistAlias } },
        },
        select: {
          title: true,
        },
      },
    });
  };

  static dimensionsWithItemsForSpecialist =
    Prisma.validator<Prisma.DimensionDefaultArgs>()({
      select:
        PrismaReadRepository.getDimensionsWithItemsForSpecialistSelect(
          'specialist',
        ),
    });
}
