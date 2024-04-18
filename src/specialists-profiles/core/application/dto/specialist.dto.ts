import { createZodDto } from 'nestjs-zod';
import { CreateUserDtoSchema } from 'src/admin-panel/users/application/dto/create-user.dto';
import { PasswordDtoSchema } from 'src/admin-panel/users/application/dto/user.dto';
import { z } from 'zod';

export const SpecialistDtoSchema = CreateUserDtoSchema.and(
  z.object({ passportRepeat: PasswordDtoSchema.shape.password }),
);

export class SpecialistDto extends createZodDto(SpecialistDtoSchema) {}
