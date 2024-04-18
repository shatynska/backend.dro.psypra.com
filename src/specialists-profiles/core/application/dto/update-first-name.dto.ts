import { createZodDto } from 'nestjs-zod';
import { SpecialistAliasDtoSchema } from '~/shared/application/dto/specialist-alias.dto';
import { FirstNameDtoSchema } from './first-name.dto';

export const UpdateFirstNameDtoSchema = FirstNameDtoSchema.merge(
  SpecialistAliasDtoSchema,
);

export class UpdateFirstNameDto extends createZodDto(
  UpdateFirstNameDtoSchema,
) {}
