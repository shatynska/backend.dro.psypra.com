import {
  DimensionItemWithAliasAndHrefDto,
  dimensionItemWithAliasAndHrefDtoStubs,
} from './dimension-item-with-alias-and-href.dto';

export class DimensionItemsDto {
  items: DimensionItemWithAliasAndHrefDto[];
}

export const dimensionItemsDtoStubs: DimensionItemsDto[] = [
  {
    items: dimensionItemWithAliasAndHrefDtoStubs,
  },
];
