import { Provider, Role } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Token } from './token.entity';

export class User {
  @ApiProperty({
    example: 'c0298617-9f36-489e-ba72-d462777987e9',
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
    type: 'string',
    format: 'date-time',
  })
  createdAt: Date;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  updatedAt: Date;
  @ApiProperty({
    example: [Role.USER],
    enum: Role,
  })
  roles: Role[];
  @ApiProperty({
    type: () => Token,
    isArray: true,
    required: false,
  })
  Token?: Token[];
}
