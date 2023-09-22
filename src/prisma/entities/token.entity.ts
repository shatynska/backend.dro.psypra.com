import { ApiProperty } from '@nestjs/swagger';
import { User } from './user.entity';

export class Token {
  @ApiProperty()
  token: string;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  exp: Date;
  @ApiProperty({
    required: false,
  })
  user?: User;
  @ApiProperty()
  userId: string;
  @ApiProperty()
  userAgent: string;
}
