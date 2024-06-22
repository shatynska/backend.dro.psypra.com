import { SpecialistAliasDto } from '~/shared';
import { GetFirstNameResult } from '../get-first-name/get-first-name.result';
import { CoreDto } from './core.dto';

export const QUERIES_REPOSITORY_TOKEN = Symbol('CoreQueriesRepositoryToken');

export interface QueriesRepository {
  getCore(parameters: SpecialistAliasDto): Promise<CoreDto | null>;

  getFirstName(
    parameters: SpecialistAliasDto,
  ): Promise<GetFirstNameResult | null>;
}
