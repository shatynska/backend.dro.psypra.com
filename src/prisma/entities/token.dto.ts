import { ApiProperty } from '@nestjs/swagger';

export class TokenDto {
  @ApiProperty()
  token: string;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  exp: Date;
  @ApiProperty()
  userAgent: string;
}
