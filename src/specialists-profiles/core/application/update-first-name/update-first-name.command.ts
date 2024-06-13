import { createZodDto } from 'nestjs-zod';
import { specialistAliasDtoSchema } from '~/shared';
import { coreDtoSchema } from '../shared';

export const updateFirstNameParametersSchema = coreDtoSchema
  .pick({
    firstName: true,
  })
  .merge(specialistAliasDtoSchema);

export class UpdateFirstNameParameters extends createZodDto(
  updateFirstNameParametersSchema,
) {}

export class UpdateFirstNameCommand {
  constructor(public readonly parameters: UpdateFirstNameParameters) {}
}
