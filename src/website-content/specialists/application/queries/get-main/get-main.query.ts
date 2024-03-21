import { GetMainParametersDto } from '../../dto/get-main-parameters.dto';

export class GetMainQuery {
  constructor(public readonly parameters: GetMainParametersDto) {}
}
