import { DimensionItem } from '@prisma/client';
import { DimensionItemsDto } from '~/dimensions/application/dto/dimension-items.dto';

type Props = Pick<
  DimensionItem,
  'alias' | 'title' | 'description' | 'dimensionAlias'
>[];

export class DimensionItemsByDimensionAliasMapper {
  static mapToDto(data: Props): DimensionItemsDto {
    const mappedData = {
      items: data.map((item) => ({
        alias: item.alias,
        href: `/${item.dimensionAlias}/${item.alias}`,
        title: item.title.charAt(0).toUpperCase() + item.title.slice(1),
        description: item.description,
      })),
    };

    return mappedData;
  }
}
