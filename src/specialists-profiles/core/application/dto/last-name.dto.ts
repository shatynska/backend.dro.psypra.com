import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const LastNameDtoSchema = z.object({
  lastName: z.string().min(2).max(40),
});

export class LastNameDto extends createZodDto(LastNameDtoSchema) {}
