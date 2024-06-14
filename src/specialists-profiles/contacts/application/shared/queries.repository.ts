import { SpecialistAliasDto } from '~/shared';
import { ContactsDto } from './contacts.dto';

export const QUERIES_REPOSITORY_TOKEN = Symbol(
  'ContactsQueriesRepositoryToken',
);

export interface QueriesRepository {
  getAll(parameters: SpecialistAliasDto): Promise<ContactsDto | null>;
}
