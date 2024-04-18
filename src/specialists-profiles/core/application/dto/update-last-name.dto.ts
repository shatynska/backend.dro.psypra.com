import { createZodDto } from 'nestjs-zod';
import { SpecialistAliasDtoSchema } from '~/shared/application/dto/specialist-alias.dto';
import { LastNameDtoSchema } from './last-name.dto';

export const UpdateLastNameDtoSchema = LastNameDtoSchema.merge(
  SpecialistAliasDtoSchema,
);

export class UpdateLastNameDto extends createZodDto(UpdateLastNameDtoSchema) {}
