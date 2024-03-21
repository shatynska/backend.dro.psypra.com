import { GetSpecialistParametersDto } from '../../dto/get-specialist-parameters.dto';

export class GetMainQuery {
  constructor(public readonly parameters: GetSpecialistParametersDto) {}
}
