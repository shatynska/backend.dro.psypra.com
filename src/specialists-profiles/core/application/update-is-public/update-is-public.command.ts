import { createZodDto } from 'nestjs-zod';
import { specialistAliasDtoSchema } from '~/shared';
import { coreDtoSchema } from '../shared';

export const updateIsPublicParametersSchema = coreDtoSchema
  .pick({
    isPublic: true,
  })
  .merge(specialistAliasDtoSchema);

export class UpdateIsPublicParameters extends createZodDto(
  updateIsPublicParametersSchema,
) {}

export class UpdateIsPublicCommand {
  constructor(public readonly parameters: UpdateIsPublicParameters) {}
}
