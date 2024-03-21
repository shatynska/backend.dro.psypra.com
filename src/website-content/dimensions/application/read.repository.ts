import { DimensionItemDto } from './dto/get-dimension-item/dimension-item.dto';
import { GetDimensionItemParametersDto } from './dto/get-dimension-item/get-dimension-item-parameters.dto';
import { DimensionDto } from './dto/get-dimension/dimension.dto';
import { GetDimensionParametersDto } from './dto/get-dimension/get-dimension-parameters.dto';

export const READ_REPOSITORY_TOKEN = Symbol(
  'DimensionItemsReadRepositoryToken',
);

export interface ReadRepository {
  getDimension(parameters: GetDimensionParametersDto): Promise<DimensionDto>;

  getDimensionItem(
    parameters: GetDimensionItemParametersDto,
  ): Promise<DimensionItemDto>;
}
