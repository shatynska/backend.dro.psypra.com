import { createZodDto } from 'nestjs-zod';
import { SpecialistAliasDtoSchema } from '~/shared/application/dto/specialist-alias.dto';
import { IsPublicDtoSchema } from './is-public.dto';

export const UpdateIsPublicDtoSchema = IsPublicDtoSchema.merge(
  SpecialistAliasDtoSchema,
);

export class UpdateIsPublicDto extends createZodDto(UpdateIsPublicDtoSchema) {}
