import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const SpecialistAliasDtoSchema = z.object({
  alias: z.string().min(2).max(40),
});

export class SpecialistAliasDto extends createZodDto(
  SpecialistAliasDtoSchema,
) {}
