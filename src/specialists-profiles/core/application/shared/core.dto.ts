import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const coreDtoSchema = z.object({
  isPublic: z.boolean(),
  firstName: z.string().min(2).max(40),
  lastName: z.string().min(2).max(40),
});

export class CoreDto extends createZodDto(coreDtoSchema) {}
