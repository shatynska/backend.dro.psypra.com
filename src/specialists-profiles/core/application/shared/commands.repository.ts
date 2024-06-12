import { UpdateFirstNameParameters } from '../update-first-name';
import { UpdateIsPublicParameters } from '../update-is-public';
import { UpdateLastNameParameters } from '../update-last-name';

export const COMMANDS_REPOSITORY_TOKEN = Symbol('CoreCommandsRepositoryToken');

export interface CommandsRepository {
  updateIsPublic(parameters: UpdateIsPublicParameters): Promise<void>;
  updateFirstName(parameters: UpdateFirstNameParameters): Promise<void>;
  updateLastName(parameters: UpdateLastNameParameters): Promise<void>;
}
