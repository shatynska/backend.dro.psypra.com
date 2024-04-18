import { createZodDto } from 'nestjs-zod';
import { CoreDtoSchema } from 'src/specialists-profiles/core/application/dto/core.dto';

export const GetCoreResponseSchema = CoreDtoSchema;

export class GetCoreResponse extends createZodDto(GetCoreResponseSchema) {}
