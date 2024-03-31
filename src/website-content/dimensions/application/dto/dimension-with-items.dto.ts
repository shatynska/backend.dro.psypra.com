import {
  DimensionItemWithAliasAndHrefDto,
  dimensionItemWithAliasAndHrefDtoStubs,
} from './dimension-item-with-alias-and-href.dto';

export class DimensionWithItemsDto {
  title: string;
  items: DimensionItemWithAliasAndHrefDto[];
}

export const dimensionWithItemsDtoStubs: DimensionWithItemsDto[] = [
  {
    title: 'Спеціальності',
    items: dimensionItemWithAliasAndHrefDtoStubs,
  },
];
