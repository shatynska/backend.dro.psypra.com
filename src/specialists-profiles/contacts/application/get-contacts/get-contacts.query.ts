import { SpecialistAliasDto } from '~/shared';

export class GetContactsQuery {
  constructor(public readonly parameters: SpecialistAliasDto) {}
}
