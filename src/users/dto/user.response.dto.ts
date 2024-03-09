import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';

export class UserResponseDto {
  @ApiProperty({
    example: 'c0377617-9f36-489e-ba72-d462777987e9',
  })
  id: string;

  @ApiProperty({
    example: 'myUserName',
  })
  userName: string;

  @ApiProperty({
    example: 'test@gmail.com',
  })
  email?: string;

  @ApiProperty({
    example: '+380971234567',
  })
  phone?: string;

  @ApiProperty({
    example: [Role.USER],
    enum: Role,
  })
  roles: Role[];

  constructor(user: UserResponseDto) {
    Object.assign(this, user);
  }
}
