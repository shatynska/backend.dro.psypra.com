import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { COMMANDS_REPOSITORY_TOKEN, CommandsRepository } from '../shared';
import { RemoveContactCommand } from './remove-contact.command';

@CommandHandler(RemoveContactCommand)
export class RemoveContactHandler
  implements ICommandHandler<RemoveContactCommand>
{
  constructor(
    @Inject(COMMANDS_REPOSITORY_TOKEN)
    private repository: CommandsRepository,
  ) {}

  async execute({ parameters }: RemoveContactCommand): Promise<void> {
    await this.repository.removeContact(parameters);
  }
}
