import { ApiProperty } from '@nestjs/swagger';
import { Provider, Role } from '@prisma/client';
import { Token } from './token.entity';

export class User {
  @ApiProperty()
  id: string;
  @ApiProperty()
  email: string;
  @ApiProperty({
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
    isArray: true,
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
