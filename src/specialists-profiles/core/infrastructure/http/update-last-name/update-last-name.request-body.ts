import { createZodDto } from 'nestjs-zod';
import { UpdateLastNameParametersSchema } from '../../../application';

const UpdateLastNameRequestBodySchema = UpdateLastNameParametersSchema.pick({
  lastName: true,
});

export class UpdateLastNameRequestBody extends createZodDto(
  UpdateLastNameRequestBodySchema,
) {}
