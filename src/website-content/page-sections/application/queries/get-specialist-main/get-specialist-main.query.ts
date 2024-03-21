import { GetSpecialistMainParametersDto } from '../../dto/specialist-main/get-specialist-main.parameters.dto';

export class GetSpecialistMainQuery {
  constructor(public readonly parameters: GetSpecialistMainParametersDto) {}
}
