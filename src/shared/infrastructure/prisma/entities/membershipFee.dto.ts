import { ApiProperty } from '@nestjs/swagger';

export class MembershipFeeDto {
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
