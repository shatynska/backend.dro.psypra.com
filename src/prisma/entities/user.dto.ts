import { Provider, Role } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({
    example: 'c0377617-9f36-489e-ba72-d462777987e9',
  })
  id: string;
  @ApiProperty({
    example: 'test@gmail.com',
  })
  email: string;
  @ApiProperty({
    example: 'secret_password',
    nullable: true,
  })
  password: string | null;
  @ApiProperty({
    enum: Provider,
    nullable: true,
  })
  provider: Provider | null;
  @ApiProperty({
    example: [Role.USER],
    enum: Role,
  })
  roles: Role[];
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  createdAt: Date;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  updatedAt: Date;
}
