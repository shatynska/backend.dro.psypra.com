import { GetDimensionItemParametersDto } from '../../dto/dimension-item/get-dimension-item.parameters.dto';

export class GetDimensionItemQuery {
  constructor(public readonly parameters: GetDimensionItemParametersDto) {}
}
