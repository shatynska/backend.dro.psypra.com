import { GetSpecialistBriefParametersDto } from '../../dto/specialist-brief/get-specialist-brief.parameters.dto';

export class GetSpecialistBriefQuery {
  constructor(public readonly parameters: GetSpecialistBriefParametersDto) {}
}
