import { createZodDto } from 'nestjs-zod';
import { PasswordDtoSchema, UserNameDtoSchema } from './user.dto';

export const CreateUserDtoSchema = UserNameDtoSchema.and(PasswordDtoSchema);

export class CreateUserDto extends createZodDto(CreateUserDtoSchema) {}
