import { GetDimensionWithItemsParametersDto } from '../../dto/dimension-with-items/get-dimension-with-items.parameters.dto';

export class GetDimensionWithItemsQuery {
  constructor(public readonly parameters: GetDimensionWithItemsParametersDto) {}
}
