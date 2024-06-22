import { SpecialistAliasDto } from '~/shared';
import { GetLastNameResult } from '../get-last-name/get-last-name.result';
import { CoreDto } from './core.dto';
import { GetFirstNameResult } from '../get-first-name';

export const QUERIES_REPOSITORY_TOKEN = Symbol('CoreQueriesRepositoryToken');

export interface QueriesRepository {
  getCore(parameters: SpecialistAliasDto): Promise<CoreDto | null>;

  getFirstName(
    parameters: SpecialistAliasDto,
  ): Promise<GetFirstNameResult | null>;

  getLastName(
    parameters: SpecialistAliasDto,
  ): Promise<GetLastNameResult | null>;
}
