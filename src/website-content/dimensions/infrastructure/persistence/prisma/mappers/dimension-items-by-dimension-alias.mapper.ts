import { DimensionItem } from '@prisma/client';
import { DimensionItemsDto } from '~/dimensions/application/dto/dimension-items.dto';

type Parameters = Pick<
  DimensionItem,
  'alias' | 'title' | 'description' | 'dimensionAlias'
>[];

export class DimensionItemsByDimensionAliasMapper {
  static mapToDto(items: Parameters): DimensionItemsDto {
    return {
      items: items.map((item) => ({
        alias: item.alias,
        href: `/${item.dimensionAlias}/${item.alias}`,
        title: item.title.charAt(0).toUpperCase() + item.title.slice(1),
        description: item.description,
      })),
    };
  }
}
