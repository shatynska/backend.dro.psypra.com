import { MemberStatus } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { MembershipFee } from './membershipFee.entity';

export class Member {
  @ApiProperty({
    example: 'c0287617-9f36-489e-ba72-d462777987e9',
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
    type: () => MembershipFee,
    isArray: true,
    required: false,
  })
  membershipFees?: MembershipFee[];
}
