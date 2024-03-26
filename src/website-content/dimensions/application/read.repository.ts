import { DimensionItemDto } from './dto/dimension-item/dimension-item.dto';
import { DimensionWithHrefDto } from './dto/dimension-with-href/dimension-with-href.dto';
import { DimensionWithItemsDto } from './dto/dimension-with-items/dimension-with-items.dto';

export const READ_REPOSITORY_TOKEN = Symbol(
  'DimensionItemsReadRepositoryToken',
);

export interface ReadRepository {
  getDimensionItem(alias: string): Promise<DimensionItemDto>;

  getDimensionWithHref(alias: string): Promise<DimensionWithHrefDto>;

  getDimensionWithItems(alias: string): Promise<DimensionWithItemsDto>;
}
