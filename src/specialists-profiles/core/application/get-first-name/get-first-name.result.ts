import { createZodDto } from 'nestjs-zod';
import { coreDtoSchema } from '../shared';

export const getFirstNameResultSchema = coreDtoSchema.pick({ firstName: true });

export class GetFirstNameResult extends createZodDto(
  getFirstNameResultSchema,
) {}
