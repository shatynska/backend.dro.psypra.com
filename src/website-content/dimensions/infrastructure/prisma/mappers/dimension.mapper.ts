import { Prisma } from '@prisma/client';
import { DimensionDto } from '../../../application/dto/get-dimension/dimension.dto';
import { PrismaReadRepository } from '../read.repository';

type Props = Prisma.DimensionGetPayload<
  typeof PrismaReadRepository.dimensionWithItems
>;

export class DimensionMapper {
  static mapToDto(data: Props): DimensionDto {
    const mappedData = {
      title: data.title,
      items: data.dimensionItems.map((item) => ({
        alias: item.alias,
        href: `/${data.alias}/${item.alias}`,
        title: item.title,
        description: item.description,
      })),
    };
    return mappedData;
  }
}
