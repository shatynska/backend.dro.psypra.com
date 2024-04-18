import { createZodDto } from 'nestjs-zod';
import { FirstNameDtoSchema } from 'src/specialists-profiles/core/application/dto/first-name.dto';

export const UpdateFirstNameRequestBodySchema = FirstNameDtoSchema;

export class UpdateFirstNameRequestBody extends createZodDto(
  UpdateFirstNameRequestBodySchema,
) {}
