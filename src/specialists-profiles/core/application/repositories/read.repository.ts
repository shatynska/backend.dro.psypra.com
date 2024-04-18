import { SpecialistAliasDto } from '~/shared/application/dto/specialist-alias.dto';
import { CoreDto } from '../dto/core.dto';

export const CORE_READ_REPOSITORY_TOKEN = Symbol('CoreReadRepositoryToken');

export interface ReadRepository {
  getCore(parameters: SpecialistAliasDto): Promise<CoreDto | null>;
}
