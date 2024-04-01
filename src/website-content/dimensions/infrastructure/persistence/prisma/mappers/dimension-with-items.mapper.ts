import { Prisma } from '@prisma/client';
import { DimensionWithItemsDto } from '~/dimensions/application/dto/dimension-with-items.dto';
import { PrismaReadRepository } from '../read.repository';

type Props = Prisma.DimensionGetPayload<
  typeof PrismaReadRepository.dimensionWithItems
>;

export class DimensionWithItemsMapper {
  static mapToDto(data: Props): DimensionWithItemsDto {
    const mappedData = {
      title: data.title,
      items: data.dimensionItems.map((item) => ({
        alias: item.alias,
        href: `/${data.alias}/${item.alias}`,
        title: item.title.charAt(0).toUpperCase() + item.title.slice(1),
        description: item.description,
      })),
    };
    return mappedData;
  }
}
