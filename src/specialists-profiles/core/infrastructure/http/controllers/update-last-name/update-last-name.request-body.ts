import { createZodDto } from 'nestjs-zod';
import { LastNameDtoSchema } from 'src/specialists-profiles/core/application/dto/last-name.dto';

export const UpdateLastNameRequestBodySchema = LastNameDtoSchema;

export class UpdateLastNameRequestBody extends createZodDto(
  UpdateLastNameRequestBodySchema,
) {}
