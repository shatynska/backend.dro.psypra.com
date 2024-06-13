import { createZodDto } from 'nestjs-zod';
import { specialistAliasDtoSchema } from '~/shared';
import { coreDtoSchema } from '../shared';

export const updateLastNameParametersSchema = coreDtoSchema
  .pick({
    lastName: true,
  })
  .merge(specialistAliasDtoSchema);

export class UpdateLastNameParameters extends createZodDto(
  updateLastNameParametersSchema,
) {}
export class UpdateLastNameCommand {
  constructor(public readonly parameters: UpdateLastNameParameters) {}
}
