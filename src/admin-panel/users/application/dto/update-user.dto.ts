import { createZodDto } from 'nestjs-zod';
import { UserDtoSchema } from './user.dto';

export const UpdateUserDtoSchema = UserDtoSchema.omit({ id: true });

export class UpdateUserDto extends createZodDto(UpdateUserDtoSchema) {}
