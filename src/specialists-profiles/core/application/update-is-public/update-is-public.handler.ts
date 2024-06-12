import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { COMMANDS_REPOSITORY_TOKEN, CommandsRepository } from '../shared';
import { UpdateIsPublicCommand } from './update-is-public.command';

@CommandHandler(UpdateIsPublicCommand)
export class UpdateIsPublicHandler
  implements ICommandHandler<UpdateIsPublicCommand>
{
  constructor(
    @Inject(COMMANDS_REPOSITORY_TOKEN)
    private repository: CommandsRepository,
  ) {}

  async execute({ parameters }: UpdateIsPublicCommand): Promise<void> {
    await this.repository.updateIsPublic(parameters);
  }
}
