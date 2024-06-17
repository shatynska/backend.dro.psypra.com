import { AddContactParameters } from '../add-contact';
import { RemoveContactParameters } from '../remove-contact/remove-contact.command';

export const COMMANDS_REPOSITORY_TOKEN = Symbol(
  'ContactsCommandsRepositoryToken',
);

export interface CommandsRepository {
  addContact(parameters: AddContactParameters): Promise<void>;

  removeContact(parameters: RemoveContactParameters): Promise<void>;
}
