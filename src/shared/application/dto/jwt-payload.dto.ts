import { Role } from '@prisma/client';
import { z } from 'zod';
import { specialistAliasDtoSchema } from './specialist-alias.dto';

export class JwtPayloadDto {
  id!: string;
  userName!: z.infer<typeof specialistAliasDtoSchema.shape.alias>;
  email!: string;
  phone!: string;
  roles!: Role[];
}
