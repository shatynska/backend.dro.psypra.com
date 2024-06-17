import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';
import { specialistAliasDtoSchema } from '~/shared';
import { contactsDtoSchema } from '../shared';

export const addContactParametersSchema = z
  .object({
    contact: z.union([
      contactsDtoSchema.shape.phones.element,
      contactsDtoSchema.shape.emails.element,
      contactsDtoSchema.shape.websites.element,
    ]),
    type: z.enum(['PHONE', 'WEBSITE', 'EMAIL']),
  })
  .merge(specialistAliasDtoSchema);

export class AddContactParameters extends createZodDto(
  addContactParametersSchema,
) {}

export class AddContactCommand {
  constructor(public readonly parameters: AddContactParameters) {}
}
