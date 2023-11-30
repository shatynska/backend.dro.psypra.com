export class CurrentCashBookResponseDto {
  reportingMonths: number[];
  membersWithMembershipFees: MemberWithMembershipFees[];
  expenses: Expense[];
}

export interface Expense {
  id: string;
  date: string;
  amount: number;
  details: string;
}

export interface Member {
  id: string;
  name: string;
  status: string;
}

export interface MembershipFee {
  id: string;
  date: string;
  reportingMonth: number;
  memberName: string;
  amount: number;
}

export interface MemberWithMembershipFees {
  name: string;
  membershipFees: Array<[number, number]>;
}
