import { GetDimensionParametersDto } from '../../dto/get-dimension/get-dimension-parameters.dto';

export class GetDimensionQuery {
  constructor(public readonly parameters: GetDimensionParametersDto) {}
}
