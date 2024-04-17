import { Role } from '@prisma/client';
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const LoginResponseDtoSchema = z.object({
  accessToken: z.string().startsWith('Bearer '),
  user: z
    .object({
      userName: z.string().min(2).max(40),
      roles: z.array(z.nativeEnum(Role)),
    })
    .nullable(),
});

export class LoginResponseDto extends createZodDto(LoginResponseDtoSchema) {}
