import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  COMMANDS_REPOSITORY_TOKEN,
  CommandsRepository,
} from '../shared/commands.repository';
import { AddPhoneCommand } from './add-phone.command';

@CommandHandler(AddPhoneCommand)
export class AddPhoneHandler implements ICommandHandler<AddPhoneCommand> {
  constructor(
    @Inject(COMMANDS_REPOSITORY_TOKEN)
    private repository: CommandsRepository,
  ) {}

  async execute({ parameters }: AddPhoneCommand): Promise<void> {
    await this.repository.addPhone(parameters);
  }
}
