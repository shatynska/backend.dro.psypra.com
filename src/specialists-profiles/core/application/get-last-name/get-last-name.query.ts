import { SpecialistAliasDto } from '~/shared';

export class GetLastNameQuery {
  constructor(public readonly parameters: SpecialistAliasDto) {}
}
