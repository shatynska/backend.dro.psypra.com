import { UserDto } from '../dto/user.dto';

export const REPOSITORY_TOKEN = Symbol('UsersReadRepositoryToken');

export interface ReadRepository {
  getUserByIdentifier(identifier: string): Promise<UserDto | null>;
}
