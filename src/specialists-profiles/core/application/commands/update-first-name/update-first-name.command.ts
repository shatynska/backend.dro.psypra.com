import { UpdateFirstNameDto } from '../../dto/update-first-name.dto';

export class UpdateFirstNameCommand {
  constructor(public readonly parameters: UpdateFirstNameDto) {}
}
