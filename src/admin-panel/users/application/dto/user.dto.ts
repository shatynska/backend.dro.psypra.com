import { Provider, Role } from '@prisma/client';
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const UserDtoSchema = z.object({
  id: z.string().uuid(),
  userName: z.string().min(2).max(40),
  email: z.string().email().optional(),
  phone: z.string().min(8).max(40).optional(),
  roles: z.array(z.nativeEnum(Role)),
  provider: z.nativeEnum(Provider).optional(),
});

export class UserDto extends createZodDto(UserDtoSchema) {}

export const UserNameDtoSchema = UserDtoSchema.pick({ userName: true });

export class UserNameDto extends createZodDto(UserNameDtoSchema) {}

export const PasswordDtoSchema = z.object({
  password: z.string().min(8).max(40),
});

export class PasswordDto extends createZodDto(PasswordDtoSchema) {}
