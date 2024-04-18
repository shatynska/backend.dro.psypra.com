import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  CORE_WRITE_REPOSITORY_TOKEN,
  WriteRepository,
} from '../../repositories/write.repository';
import { UpdateFirstNameCommand } from './update-first-name.command';

@CommandHandler(UpdateFirstNameCommand)
export class UpdateFirstNameHandler
  implements ICommandHandler<UpdateFirstNameCommand>
{
  constructor(
    @Inject(CORE_WRITE_REPOSITORY_TOKEN)
    private repository: WriteRepository,
  ) {}

  async execute({ parameters }: UpdateFirstNameCommand): Promise<void> {
    await this.repository.updateFirstName(parameters);
  }
}
