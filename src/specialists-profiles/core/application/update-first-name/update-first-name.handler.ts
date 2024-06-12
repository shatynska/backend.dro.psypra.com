import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  COMMANDS_REPOSITORY_TOKEN,
  CommandsRepository,
} from '../shared/commands.repository';
import { UpdateFirstNameCommand } from './update-first-name.command';

@CommandHandler(UpdateFirstNameCommand)
export class UpdateFirstNameHandler
  implements ICommandHandler<UpdateFirstNameCommand>
{
  constructor(
    @Inject(COMMANDS_REPOSITORY_TOKEN)
    private repository: CommandsRepository,
  ) {}

  async execute({ parameters }: UpdateFirstNameCommand): Promise<void> {
    await this.repository.updateFirstName(parameters);
  }
}
