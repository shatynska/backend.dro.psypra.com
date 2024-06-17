import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';
import { contactsDtoSchema } from '../../../application';

const addWebsiteRequestBodySchema = z.object({
  contact: contactsDtoSchema.shape.websites.element,
});

export class AddWebsiteRequestBody extends createZodDto(
  addWebsiteRequestBodySchema,
) {}
