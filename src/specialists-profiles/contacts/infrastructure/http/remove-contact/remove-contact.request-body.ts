import { createZodDto } from 'nestjs-zod';
import { removeContactParametersSchema } from '../../../application';

const removeContactRequestBodySchema = removeContactParametersSchema.pick({
  id: true,
});

export class RemoveContactRequestBody extends createZodDto(
  removeContactRequestBodySchema,
) {}
