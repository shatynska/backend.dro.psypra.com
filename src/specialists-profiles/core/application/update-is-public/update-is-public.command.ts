import { createZodDto } from 'nestjs-zod';
import { SpecialistAliasDtoSchema } from '~/shared';
import { CoreDtoSchema } from '../shared';

export const UpdateIsPublicParametersSchema = CoreDtoSchema.pick({
  isPublic: true,
}).merge(SpecialistAliasDtoSchema);

export class UpdateIsPublicParameters extends createZodDto(
  UpdateIsPublicParametersSchema,
) {}

export class UpdateIsPublicCommand {
  constructor(public readonly parameters: UpdateIsPublicParameters) {}
}
