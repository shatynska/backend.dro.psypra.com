import { SpecialistAliasDto } from '~/shared/application/dto/specialist-alias.dto';

export class GetCoreQuery {
  constructor(public readonly parameters: SpecialistAliasDto) {}
}
