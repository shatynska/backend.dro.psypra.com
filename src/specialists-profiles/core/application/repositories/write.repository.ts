import { UpdateFirstNameDto } from '../dto/update-first-name.dto';
import { UpdateIsPublicDto } from '../dto/update-is-public.dto';
import { UpdateLastNameDto } from '../dto/update-last-name.dto';

export const WRITE_REPOSITORY_TOKEN = Symbol('CoreWriteRepositoryToken');

export interface WriteRepository {
  updateIsPublic(parameters: UpdateIsPublicDto): Promise<void>;
  updateFirstName(parameters: UpdateFirstNameDto): Promise<void>;
  updateLastName(parameters: UpdateLastNameDto): Promise<void>;
}
