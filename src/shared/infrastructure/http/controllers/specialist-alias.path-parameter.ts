import { z } from 'zod';
import { specialistAliasDtoSchema } from '../../../application';

export type SpecialistAliasPathParameter = z.infer<
  typeof specialistAliasDtoSchema.shape.alias
>;
