import { createZodDto } from 'nestjs-zod';
import { passwordDtoSchema, userNameDtoSchema } from './user.dto';

export const createUserDtoSchema = userNameDtoSchema.and(passwordDtoSchema);

export class CreateUserDto extends createZodDto(createUserDtoSchema) {}
