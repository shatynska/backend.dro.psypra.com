import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';
import { specialistAliasDtoSchema } from '~/shared';
import { contactsDtoSchema } from '../shared';

export const addPhoneParametersSchema = z
  .object({
    phone: contactsDtoSchema.shape.phones.element,
  })
  .merge(specialistAliasDtoSchema);

export class AddPhoneParameters extends createZodDto(
  addPhoneParametersSchema,
) {}

export class AddPhoneCommand {
  constructor(public readonly parameters: AddPhoneParameters) {}
}
