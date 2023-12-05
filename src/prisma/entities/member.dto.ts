import { MemberStatus } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class MemberDto {
  @ApiProperty({
    example: 'c0357617-9f36-489e-ba72-d462777987e9',
  })
  id: string;
  @ApiProperty({
    example: 'Олег',
  })
  firstName: string;
  @ApiProperty({
    example: 'Зварицький',
  })
  lastName: string;
  @ApiProperty({
    example: [MemberStatus.ACTIVE],
    enum: MemberStatus,
  })
  status: MemberStatus;
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
