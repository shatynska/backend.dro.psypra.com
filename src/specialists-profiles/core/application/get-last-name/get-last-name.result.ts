import { createZodDto } from 'nestjs-zod';
import { coreDtoSchema } from '../shared';

export const getLastNameResultSchema = coreDtoSchema.pick({ lastName: true });

export class GetLastNameResult extends createZodDto(getLastNameResultSchema) {}
