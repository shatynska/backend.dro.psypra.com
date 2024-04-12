import { User } from '@prisma/client';
import { UserDto } from 'src/users/read/application/dto/user.dto';

type Parameters = Pick<User, 'id' | 'userName' | 'email' | 'phone' | 'roles'>;

export class UserMapper {
  static mapToDto({ id, userName, email, phone, roles }: Parameters): UserDto {
    return {
      id,
      userName,
      email: email ?? undefined,
      phone: phone ?? undefined,
      roles,
    };
  }
}
