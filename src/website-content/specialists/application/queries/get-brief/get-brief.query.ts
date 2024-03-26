import { GetSpecialistParametersDto } from '../../dto/get-specialist-parameters.dto';

export class GetBriefQuery {
  constructor(public readonly parameters: GetSpecialistParametersDto) {}
}
