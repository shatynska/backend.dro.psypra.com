import { Provider, Role } from '@prisma/client';

export class UserDto {
  id!: string;
  userName!: string;
  email?: string;
  phone?: string;
  roles!: Role[];
  provider?: Provider;
}
