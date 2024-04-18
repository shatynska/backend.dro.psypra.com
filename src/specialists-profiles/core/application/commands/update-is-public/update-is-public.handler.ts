import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  CORE_WRITE_REPOSITORY_TOKEN,
  WriteRepository,
} from '../../repositories/write.repository';
import { UpdateIsPublicCommand } from './update-is-public.command';

@CommandHandler(UpdateIsPublicCommand)
export class UpdateIsPublicHandler
  implements ICommandHandler<UpdateIsPublicCommand>
{
  constructor(
    @Inject(CORE_WRITE_REPOSITORY_TOKEN)
    private repository: WriteRepository,
  ) {}

  async execute({ parameters }: UpdateIsPublicCommand): Promise<void> {
    await this.repository.updateIsPublic(parameters);
  }
}
