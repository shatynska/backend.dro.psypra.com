import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const LoginDtoSchema = z
  .object({
    identifier: z.string().min(2).max(40),
    password: z.string().min(8).max(40),
    passportRepeat: z.string().min(8).max(40),
  })
  .refine((data) => data.password === data.passportRepeat, {
    path: ['passportRepeat'],
    message: 'Паролі не співпадають',
  });

export class LoginDto extends createZodDto(LoginDtoSchema) {}
