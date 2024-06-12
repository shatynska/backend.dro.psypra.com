import { createZodDto } from 'nestjs-zod';
import { UpdateFirstNameParametersSchema } from '../../../application';

const UpdateFirstNameRequestBodySchema = UpdateFirstNameParametersSchema.pick({
  firstName: true,
});

export class UpdateFirstNameRequestBody extends createZodDto(
  UpdateFirstNameRequestBodySchema,
) {}
