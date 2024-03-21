import { DimensionItemDto } from '../get-dimension-item/dimension-item.dto';

export class DimensionDto {
  title: string;
  items: Array<DimensionItemDto & { alias: string; href: string }>;
}
