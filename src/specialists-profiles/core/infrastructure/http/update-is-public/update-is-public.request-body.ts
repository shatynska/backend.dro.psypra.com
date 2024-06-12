import { createZodDto } from 'nestjs-zod';
import { UpdateIsPublicParametersSchema } from '../../../application';

const UpdateIsPublicRequestBodySchema = UpdateIsPublicParametersSchema.pick({
  isPublic: true,
});

export class UpdateIsPublicRequestBody extends createZodDto(
  UpdateIsPublicRequestBodySchema,
) {}
