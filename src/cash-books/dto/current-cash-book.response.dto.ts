export class CurrentCashBookResponseDto {
  reportingMonths: number[];
  membersWithMembershipFees: MemberWithMembershipFees[];
  expenses: Expense[];
  constructor(CurrentCashBook: CurrentCashBookResponseDto) {
    Object.assign(this, CurrentCashBook);
  }
}

export class Expense {
  date: string;
  amount: number;
  details: string;
}

export class MemberWithMembershipFees {
  lastName: string;
  firstName: string;
  membershipFees: MembershipFee[];
}

export class MembershipFee {
  reportingMonth: number;
  amount: number;
}
