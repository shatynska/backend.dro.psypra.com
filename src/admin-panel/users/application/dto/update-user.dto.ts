import { createZodDto } from 'nestjs-zod';
import { userDtoSchema } from './user.dto';

export const updateUserDtoSchema = userDtoSchema.omit({ id: true });

export class UpdateUserDto extends createZodDto(updateUserDtoSchema) {}
