import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const IsPublicDtoSchema = z.object({
  isPublic: z.boolean(),
});

export class IsPublicDto extends createZodDto(IsPublicDtoSchema) {}
