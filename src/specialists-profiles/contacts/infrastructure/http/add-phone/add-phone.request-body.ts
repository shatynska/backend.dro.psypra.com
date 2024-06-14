import { createZodDto } from 'nestjs-zod';
import { addPhoneParametersSchema } from '../../../application';

const addPhoneRequestBodySchema = addPhoneParametersSchema.pick({
  phone: true,
});

export class AddPhoneRequestBody extends createZodDto(
  addPhoneRequestBodySchema,
) {}
