import { createZodDto } from 'nestjs-zod';
import { SpecialistAliasDtoSchema } from '~/shared';
import { CoreDtoSchema } from '../shared/core.dto';

export const UpdateLastNameParametersSchema = CoreDtoSchema.pick({
  lastName: true,
}).merge(SpecialistAliasDtoSchema);

export class UpdateLastNameParameters extends createZodDto(
  UpdateLastNameParametersSchema,
) {}
export class UpdateLastNameCommand {
  constructor(public readonly parameters: UpdateLastNameParameters) {}
}
