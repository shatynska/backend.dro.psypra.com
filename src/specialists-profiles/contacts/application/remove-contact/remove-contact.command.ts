import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';
import { specialistAliasDtoSchema } from '~/shared';

export const removeContactParametersSchema = z
  .object({
    id: z.string(),
  })
  .merge(specialistAliasDtoSchema);

export class RemoveContactParameters extends createZodDto(
  removeContactParametersSchema,
) {}

export class RemoveContactCommand {
  constructor(public readonly parameters: RemoveContactParameters) {}
}
