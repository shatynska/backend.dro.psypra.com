import { GetHomeDimensionParametersDto } from '../../dto/home-dimension/get-home-dimension.parameters.dto';

export class GetHomeDimensionQuery {
  constructor(public readonly parameters: GetHomeDimensionParametersDto) {}
}
