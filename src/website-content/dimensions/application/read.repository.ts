import { DimensionItemDto } from './dto/dimension-item/dimension-item.dto';
import { GetDimensionItemParametersDto } from './dto/dimension-item/get-dimension-item.parameters.dto';
import { DimensionWithHrefDto } from './dto/dimension-with-href/dimension-with-href.dto';
import { GetDimensionWithHrefParametersDto } from './dto/dimension-with-href/get-dimension-with-href.parameters.dto';
import { DimensionWithItemsDto } from './dto/dimension-with-items/dimension-with-items.dto';
import { GetDimensionWithItemsParametersDto } from './dto/dimension-with-items/get-dimension-with-items.parameters.dto';

export const READ_REPOSITORY_TOKEN = Symbol(
  'DimensionItemsReadRepositoryToken',
);

export interface ReadRepository {
  getDimensionItem(
    parameters: GetDimensionItemParametersDto,
  ): Promise<DimensionItemDto>;

  getDimensionWithHref(
    parameters: GetDimensionWithHrefParametersDto,
  ): Promise<DimensionWithHrefDto>;

  getDimensionWithItems(
    parameters: GetDimensionWithItemsParametersDto,
  ): Promise<DimensionWithItemsDto>;
}
