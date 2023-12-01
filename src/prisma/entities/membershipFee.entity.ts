import { ApiProperty } from '@nestjs/swagger';
import { Member } from './member.entity';

export class MembershipFee {
  @ApiProperty({
    example: 'c0287617-9f36-489e-ba72-d462777987e9',
  })
  id: string;
  @ApiProperty({
    example: 300,
    type: 'integer',
    format: 'int32',
  })
  amount: number;
  @ApiProperty({
    example: 2022,
    type: 'integer',
    format: 'int32',
  })
  year: number;
  @ApiProperty({
    example: 2,
    type: 'integer',
    format: 'int32',
  })
  reportingMonth: number;
  @ApiProperty({
    type: () => Member,
    required: false,
  })
  member?: Member;
  @ApiProperty({
    example: 'c0287617-9f36-489e-ba72-d462777987e9',
  })
  memberId: string;
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  createdAt: Date;
}
