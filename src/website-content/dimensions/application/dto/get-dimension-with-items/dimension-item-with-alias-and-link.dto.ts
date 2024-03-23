import { DimensionItemDto } from '../get-dimension-item/dimension-item.dto';

export class DimensionItemWithAliasAndHrefDto extends DimensionItemDto {
  alias: string;
  href: string;
}
