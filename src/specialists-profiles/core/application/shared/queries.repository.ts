import { SpecialistAliasDto } from '~/shared';
import { GetFirstNameResult } from '../get-first-name';
import { GetIsPublicResult } from '../get-is-public';
import { GetLastNameResult } from '../get-last-name/get-last-name.result';
import { CoreDto } from './core.dto';

export const QUERIES_REPOSITORY_TOKEN = Symbol('CoreQueriesRepositoryToken');

export interface QueriesRepository {
  getCore(parameters: SpecialistAliasDto): Promise<CoreDto | null>;

  getFirstName(
    parameters: SpecialistAliasDto,
  ): Promise<GetFirstNameResult | null>;

  getLastName(
    parameters: SpecialistAliasDto,
  ): Promise<GetLastNameResult | null>;

  getIsPublic(
    parameters: SpecialistAliasDto,
  ): Promise<GetIsPublicResult | null>;
}
