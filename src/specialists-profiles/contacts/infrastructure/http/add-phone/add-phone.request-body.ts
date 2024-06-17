import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';
import { contactsDtoSchema } from '../../../application';

const addPhoneRequestBodySchema = z.object({
  contact: contactsDtoSchema.shape.phones.element.shape.value,
});

export class AddPhoneRequestBody extends createZodDto(
  addPhoneRequestBodySchema,
) {}
