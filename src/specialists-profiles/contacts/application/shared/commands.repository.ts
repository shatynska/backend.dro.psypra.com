import { AddContactParameters } from '../add-contact';

export const COMMANDS_REPOSITORY_TOKEN = Symbol(
  'ContactsCommandsRepositoryToken',
);

export interface CommandsRepository {
  addContact(parameters: AddContactParameters): Promise<void>;
}
