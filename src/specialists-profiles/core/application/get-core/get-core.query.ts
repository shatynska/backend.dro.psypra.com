import { SpecialistAliasDto } from '~/shared';

export class GetCoreQuery {
  constructor(public readonly parameters: SpecialistAliasDto) {}
}
