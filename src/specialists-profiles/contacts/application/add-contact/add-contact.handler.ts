import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { COMMANDS_REPOSITORY_TOKEN, CommandsRepository } from '../shared';
import { AddContactCommand } from './add-contact.command';

@CommandHandler(AddContactCommand)
export class AddContactHandler implements ICommandHandler<AddContactCommand> {
  constructor(
    @Inject(COMMANDS_REPOSITORY_TOKEN)
    private repository: CommandsRepository,
  ) {}

  async execute({ parameters }: AddContactCommand): Promise<void> {
    await this.repository.addContact(parameters);
  }
}
