import { createZodDto } from 'nestjs-zod';
import { FirstNameDtoSchema } from './first-name.dto';
import { IsPublicDtoSchema } from './is-public.dto';
import { LastNameDtoSchema } from './last-name.dto';

export const CoreDtoSchema = FirstNameDtoSchema.merge(
  LastNameDtoSchema.merge(IsPublicDtoSchema),
);

export class CoreDto extends createZodDto(CoreDtoSchema) {}
