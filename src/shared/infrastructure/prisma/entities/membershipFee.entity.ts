import { ApiProperty } from '@nestjs/swagger';
import { ReportingMonth } from './reportingMonth.entity';
import { Member } from './member.entity';

export class MembershipFee {
  @ApiProperty({
    example: 'c0367617-9f36-489e-ba72-d462777987e9',
  })
  id: string;
  @ApiProperty({
    example: 300,
    type: 'integer',
    format: 'int32',
  })
  amount: number;
  @ApiProperty({
    type: () => ReportingMonth,
    required: false,
  })
  reportingMonth?: ReportingMonth;
  @ApiProperty({
    example: 'c0297617-9f36-489e-ba72-d462777987e9',
  })
  reportingMonthId: string;
  @ApiProperty({
    type: () => Member,
    required: false,
  })
  member?: Member;
  @ApiProperty({
    example: 'c0357617-9f36-489e-ba72-d462777987e9',
  })
  memberId: string;
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
