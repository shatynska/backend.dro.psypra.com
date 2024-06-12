import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { COMMANDS_REPOSITORY_TOKEN, CommandsRepository } from '../shared';
import { UpdateLastNameCommand } from './update-last-name.command';

@CommandHandler(UpdateLastNameCommand)
export class UpdateLastNameHandler
  implements ICommandHandler<UpdateLastNameCommand>
{
  constructor(
    @Inject(COMMANDS_REPOSITORY_TOKEN)
    private repository: CommandsRepository,
  ) {}

  async execute({ parameters }: UpdateLastNameCommand): Promise<void> {
    await this.repository.updateLastName(parameters);
  }
}
