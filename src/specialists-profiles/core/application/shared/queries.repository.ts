import { SpecialistAliasDto } from '~/shared';
import { CoreDto } from './core.dto';

export const QUERIES_REPOSITORY_TOKEN = Symbol('CoreQueriesRepositoryToken');

export interface QueriesRepository {
  getCore(parameters: SpecialistAliasDto): Promise<CoreDto | null>;
}
