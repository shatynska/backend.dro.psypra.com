import { createZodDto } from 'nestjs-zod';
import { SpecialistAliasDtoSchema } from '~/shared';
import { CoreDtoSchema } from '../shared';

export const UpdateFirstNameParametersSchema = CoreDtoSchema.pick({
  firstName: true,
}).merge(SpecialistAliasDtoSchema);

export class UpdateFirstNameParameters extends createZodDto(
  UpdateFirstNameParametersSchema,
) {}

export class UpdateFirstNameCommand {
  constructor(public readonly parameters: UpdateFirstNameParameters) {}
}
