import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  WRITE_REPOSITORY_TOKEN,
  WriteRepository,
} from '../../repositories/write.repository';
import { UpdateLastNameCommand } from './update-last-name.command';

@CommandHandler(UpdateLastNameCommand)
export class UpdateLastNameHandler
  implements ICommandHandler<UpdateLastNameCommand>
{
  constructor(
    @Inject(WRITE_REPOSITORY_TOKEN)
    private repository: WriteRepository,
  ) {}

  async execute({ parameters }: UpdateLastNameCommand): Promise<void> {
    await this.repository.updateLastName(parameters);
  }
}
