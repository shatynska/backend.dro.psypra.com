import { createZodDto } from 'nestjs-zod';
import { IsPublicDtoSchema } from '../../../../application/dto/is-public.dto';

export const UpdateIsPublicRequestBodySchema = IsPublicDtoSchema;

export class UpdateIsPublicRequestBody extends createZodDto(
  UpdateIsPublicRequestBodySchema,
) {}
