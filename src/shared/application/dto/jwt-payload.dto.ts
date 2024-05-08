import { Role } from '@prisma/client';

import { z } from 'zod';
import { SpecialistAliasDtoSchema } from './specialist-alias.dto';
export class JwtPayloadDto {
  id!: string;
  userName!: z.infer<typeof SpecialistAliasDtoSchema.shape.alias>;
  email!: string;
  phone!: string;
  roles!: Role[];
}
