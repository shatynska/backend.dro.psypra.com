import { SpecialistAliasDto } from '~/shared';

export class GetFirstNameQuery {
  constructor(public readonly parameters: SpecialistAliasDto) {}
}
