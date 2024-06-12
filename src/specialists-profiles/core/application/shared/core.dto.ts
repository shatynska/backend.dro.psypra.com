import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const CoreDtoSchema = z.object({
  isPublic: z.boolean(),
  firstName: z.string().min(2).max(40),
  lastName: z.string().min(2).max(40),
});

export class CoreDto extends createZodDto(CoreDtoSchema) {}
