import { SpecialistAliasDto } from '~/shared';

export class GetIsPublicQuery {
  constructor(public readonly parameters: SpecialistAliasDto) {}
}
