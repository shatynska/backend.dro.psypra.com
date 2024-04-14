import { Role } from '@prisma/client';

export class JwtPayloadDto {
  id!: string;
  userName!: string;
  email!: string;
  phone!: string;
  roles!: Role[];
}
