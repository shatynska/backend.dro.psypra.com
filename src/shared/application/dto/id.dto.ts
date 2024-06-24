import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const idDtoSchema = z.object({
  id: z.string().uuid(),
});

export class IdDto extends createZodDto(idDtoSchema) {}
