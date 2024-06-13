import { createZodDto } from 'nestjs-zod';
import { updateIsPublicParametersSchema } from '../../../application';

const updateIsPublicRequestBodySchema = updateIsPublicParametersSchema.pick({
  isPublic: true,
});

export class UpdateIsPublicRequestBody extends createZodDto(
  updateIsPublicRequestBodySchema,
) {}
