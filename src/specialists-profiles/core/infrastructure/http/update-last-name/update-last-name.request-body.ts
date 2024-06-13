import { createZodDto } from 'nestjs-zod';
import { updateLastNameParametersSchema } from '../../../application';

const updateLastNameRequestBodySchema = updateLastNameParametersSchema.pick({
  lastName: true,
});

export class UpdateLastNameRequestBody extends createZodDto(
  updateLastNameRequestBodySchema,
) {}
