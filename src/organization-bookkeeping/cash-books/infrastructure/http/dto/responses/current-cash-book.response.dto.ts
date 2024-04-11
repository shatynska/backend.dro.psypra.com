import { ApiProperty } from '@nestjs/swagger';

export class CurrentCashBookResponseDto {
  @ApiProperty({ example: [2, 3, 4, 5, 7, 8, 9, 10, 11] })
  reportingMonths!: number[];

  @ApiProperty({
    example: [
      {
        lastName: 'Зварицький',
        firstName: 'Олег',
        membershipFees: { reportingMonth: 3, amount: 350 },
      },
      {
        lastName: 'Денисюк',
        firstName: 'Жоржина',
        membershipFees: { reportingMonth: 2, amount: 150 },
      },
    ],
  })
  membersWithMembershipFees!: MemberWithMembershipFees[];

  @ApiProperty({
    example: [
      { date: '2022-11-27', amount: 385, details: 'Піца' },
      { date: '2022-12-13', amount: 520, details: 'Алкоголь' },
    ],
  })
  expenses!: Expense[];

  constructor(CurrentCashBook: CurrentCashBookResponseDto) {
    Object.assign(this, CurrentCashBook);
  }
}

export class Expense {
  @ApiProperty({ example: '2022-11-27' })
  date!: string;
  @ApiProperty({ example: 385 })
  amount!: number;
  @ApiProperty({ example: 'Піца' })
  details?: string;
}

export class MemberWithMembershipFees {
  @ApiProperty({ example: 'Олег' })
  lastName!: string;
  @ApiProperty({ example: 'Зварицький' })
  firstName!: string;
  membershipFees!: MembershipFee[];
}

export class MembershipFee {
  @ApiProperty({ example: 2 })
  reportingMonth!: number;
  @ApiProperty({ example: 150 })
  amount!: number;
}
