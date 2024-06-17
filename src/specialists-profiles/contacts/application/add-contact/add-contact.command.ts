import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';
import { specialistAliasDtoSchema } from '~/shared';
import { contactsDtoSchema } from '../shared';

export const addContactParametersSchema = z
  .object({
    contact: z.union([
      contactsDtoSchema.shape.phones.element.shape.value,
      contactsDtoSchema.shape.emails.element.shape.value,
      contactsDtoSchema.shape.websites.element.shape.value,
    ]),
    type: z.enum(['PHONE', 'EMAIL', 'WEBSITE']),
  })
  .merge(specialistAliasDtoSchema);

export class AddContactParameters extends createZodDto(
  addContactParametersSchema,
) {}

export class AddContactCommand {
  constructor(public readonly parameters: AddContactParameters) {}
}
