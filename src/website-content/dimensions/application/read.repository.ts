import { DimensionItemDto } from './dto/dimension-item/dimension-item.dto';
import { GetDimensionItemParametersDto } from './dto/dimension-item/get-dimension-item.parameters.dto';
import { DimensionWithItemsDto } from './dto/dimension-with-items/dimension-with-items.dto';
import { GetDimensionWithItemsParametersDto } from './dto/dimension-with-items/get-dimension-with-items.parameters.dto';

export const READ_REPOSITORY_TOKEN = Symbol(
  'DimensionItemsReadRepositoryToken',
);

export interface ReadRepository {
  getDimension(
    parameters: GetDimensionWithItemsParametersDto,
  ): Promise<DimensionWithItemsDto>;

  getDimensionItem(
    parameters: GetDimensionItemParametersDto,
  ): Promise<DimensionItemDto>;
}
