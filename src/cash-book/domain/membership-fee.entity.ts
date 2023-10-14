import { AmountOfMoney } from './amount-of-money.value-object';
import { Member } from './member.value-object';
import { MembershipFeeId } from './membership-fee-id.value-object';
import { Month } from './month.value-object';

export class MembershipFee {
  private readonly id: MembershipFeeId;
  private amount: AmountOfMoney;
  private month: Month;
  private member: Member;
}
