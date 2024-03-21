import { GetDimensionMainParametersDto } from '../../dto/dimension-main/get-dimension-main.parameters.dto';

export class GetDimensionMainQuery {
  constructor(public readonly parameters: GetDimensionMainParametersDto) {}
}
