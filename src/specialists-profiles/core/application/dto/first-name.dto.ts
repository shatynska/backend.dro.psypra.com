import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const FirstNameDtoSchema = z.object({
  firstName: z.string().min(2).max(40),
});

export class FirstNameDto extends createZodDto(FirstNameDtoSchema) {}
