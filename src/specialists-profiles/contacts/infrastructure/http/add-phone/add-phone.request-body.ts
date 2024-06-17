import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';
import { contactsDtoSchema } from '../../../application';

const addPhoneRequestBodySchema = z.object({
  contact: contactsDtoSchema.shape.phones.element,
});

export class AddPhoneRequestBody extends createZodDto(
  addPhoneRequestBodySchema,
) {}
