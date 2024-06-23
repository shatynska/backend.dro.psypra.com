import { createZodDto } from 'nestjs-zod';
import { coreDtoSchema } from '../shared';

export const getIsPublicResultSchema = coreDtoSchema.pick({ isPublic: true });

export class GetIsPublicResult extends createZodDto(getIsPublicResultSchema) {}
