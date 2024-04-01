import { Prisma } from '@prisma/client';
import { DimensionsWithItemsForSpecialistDto } from '~/dimensions/application/dto/dimensions-with-items-for-specialist.dto';
import { PrismaReadRepository } from '../read.repository';

type Props = Prisma.DimensionGetPayload<
  typeof PrismaReadRepository.dimensionsWithItemsForSpecialist
>[];

export class DimensionsWithItemsForSpecialistMapper {
  static mapToDto(data: Props): DimensionsWithItemsForSpecialistDto {
    const mappedData = {
      dimensions: data.map((dimension) => ({
        alias: dimension.alias,
        title: dimension.title,
        items: dimension.dimensionItems.map((item) => item.title),
      })),
    };

    return mappedData;
  }
}
