import { z } from 'zod';
import { SpecialistAliasDtoSchema } from '~/shared/application/dto/specialist-alias.dto';

export type SpecialistAliasPathParameter = z.infer<
  typeof SpecialistAliasDtoSchema.shape.alias
>;
