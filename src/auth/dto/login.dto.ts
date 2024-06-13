import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const loginDtoSchema = z.object({
  identifier: z.string().min(2).max(40),
  password: z.string().min(8).max(40),
});

export class LoginDto extends createZodDto(loginDtoSchema) {}
