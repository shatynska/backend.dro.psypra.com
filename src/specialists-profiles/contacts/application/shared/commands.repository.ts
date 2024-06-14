import { AddPhoneParameters } from '../add-phone';

export const COMMANDS_REPOSITORY_TOKEN = Symbol(
  'ContactsCommandsRepositoryToken',
);

export interface CommandsRepository {
  addPhone(parameters: AddPhoneParameters): Promise<void>;
}
