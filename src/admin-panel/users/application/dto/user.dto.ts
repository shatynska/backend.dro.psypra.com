import { Provider, Role } from '@prisma/client';
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const userDtoSchema = z.object({
  id: z.string().uuid(),
  userName: z.string().min(2).max(40),
  email: z.string().email().optional(),
  phone: z.string().min(8).max(40).optional(),
  roles: z.array(z.nativeEnum(Role)),
  provider: z.nativeEnum(Provider).optional(),
});

export class UserDto extends createZodDto(userDtoSchema) {}

export const userNameDtoSchema = userDtoSchema.pick({ userName: true });

export class UserNameDto extends createZodDto(userNameDtoSchema) {}

export const passwordDtoSchema = z.object({
  password: z.string().min(8).max(40),
});

export class PasswordDto extends createZodDto(passwordDtoSchema) {}
