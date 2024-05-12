import { Prisma } from '@prisma/client';
import { DimensionsWithItemsForSpecialistDto } from '../../../../application/dto/dimensions-with-items-for-specialist.dto';
import { PrismaReadRepository } from '../prisma.read.repository';

type Parameters = Prisma.DimensionGetPayload<
  typeof PrismaReadRepository.dimensionsWithItemsForSpecialist
>[];

export class DimensionsWithItemsForSpecialistMapper {
  static mapToDto(dimensions: Parameters): DimensionsWithItemsForSpecialistDto {
    return {
      dimensions: dimensions.map((dimension) => ({
        alias: dimension.alias,
        title: dimension.title,
        items: dimension.dimensionItems.map((item) => item.title),
      })),
    };
  }
}
