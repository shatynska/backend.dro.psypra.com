import { Provider, Role, User } from '@prisma/client';
import { Exclude } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsUUID,
} from 'class-validator';

export class UserEntity implements User {
  @IsUUID(4)
  @IsNotEmpty()
  id: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Exclude()
  password: string;

  @Exclude()
  provider: Provider;

  @IsDate()
  @IsNotEmpty()
  createdAt: Date;

  @IsDate()
  @IsNotEmpty()
  updatedAt: Date;

  @ArrayNotEmpty()
  roles: Role[];

  constructor(user: User) {
    Object.assign(this, user);
  }
}
