import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '~/shared/infrastructure/prisma/prisma.service';
import { DimensionItemDto } from '../../application/dto/get-dimension-item/dimension-item.dto';
import { GetDimensionItemParametersDto } from '../../application/dto/get-dimension-item/get-dimension-item-parameters.dto';
import { DimensionDto } from '../../application/dto/get-dimension/dimension.dto';
import { GetDimensionParametersDto } from '../../application/dto/get-dimension/get-dimension-parameters.dto';
import { ReadRepository } from '../../application/read.repository';
import { DimensionMapper } from './mappers/dimension.mapper';

@Injectable()
export class PrismaReadRepository implements ReadRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getDimensionItem({
    alias,
  }: GetDimensionItemParametersDto): Promise<DimensionItemDto | null> {
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

    return item;
  }

  async getDimension({
    alias,
  }: GetDimensionParametersDto): Promise<DimensionDto | null> {
    const dimension = await this.prismaService.dimension.findUnique({
      where: { alias: alias },
      select: PrismaReadRepository.dimensionWithItemsSelect,
    });

    if (!dimension) {
      return null;
    }

    return DimensionMapper.mapToDto(dimension);
  }

  static dimensionWithItemsSelect = Prisma.validator<Prisma.DimensionSelect>()({
    alias: true,
    title: true,
    dimensionItems: {
      select: {
        alias: true,
        title: true,
        description: true,
      },
    },
  });

  static dimensionWithItems = Prisma.validator<Prisma.DimensionDefaultArgs>()({
    select: PrismaReadRepository.dimensionWithItemsSelect,
  });
}
