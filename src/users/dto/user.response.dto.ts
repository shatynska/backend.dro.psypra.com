import { Provider } from '@nestjs/common';
import { ApiHideProperty, PickType } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { User } from '~/shared/infrastructure/prisma/entities/user.entity';

export class UserResponseDto extends PickType(User, ['id', 'email', 'roles']) {
  @ApiHideProperty()
  @Exclude()
  password: string;

  @ApiHideProperty()
  @Exclude()
  provider: Provider;

  @ApiHideProperty()
  createdAt: Date;

  @ApiHideProperty()
  updatedAt: Date;

  constructor(user: User) {
    super();
    Object.assign(this, user);
  }
}
