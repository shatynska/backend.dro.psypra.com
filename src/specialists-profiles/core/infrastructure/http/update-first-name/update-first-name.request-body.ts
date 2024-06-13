import { createZodDto } from 'nestjs-zod';
import { updateFirstNameParametersSchema } from '../../../application';

const updateFirstNameRequestBodySchema = updateFirstNameParametersSchema.pick({
  firstName: true,
});

export class UpdateFirstNameRequestBody extends createZodDto(
  updateFirstNameRequestBodySchema,
) {}
