import { UpdateLastNameDto } from '../../dto/update-last-name.dto';

export class UpdateLastNameCommand {
  constructor(public readonly parameters: UpdateLastNameDto) {}
}
