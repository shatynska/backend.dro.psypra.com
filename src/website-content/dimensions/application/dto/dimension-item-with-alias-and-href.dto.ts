import { DimensionItemDto, dimensionItemDtoStubs } from './dimension-item.dto';

export class DimensionItemWithAliasAndHrefDto extends DimensionItemDto {
  alias: string;
  href: string;
}

export const dimensionItemWithAliasAndHrefDtoStubs: DimensionItemWithAliasAndHrefDto[] =
  [
    {
      alias: 'psychologist',
      href: '/specialties/psychologist',
      ...dimensionItemDtoStubs[0],
    },
    {
      alias: 'psychotherapist',
      href: '/specialties/psychotherapist',
      ...dimensionItemDtoStubs[1],
    },
  ];
