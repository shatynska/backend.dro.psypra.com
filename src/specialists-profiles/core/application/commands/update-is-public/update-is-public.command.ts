import { UpdateIsPublicDto } from '../../dto/update-is-public.dto';

export class UpdateIsPublicCommand {
  constructor(public readonly parameters: UpdateIsPublicDto) {}
}
