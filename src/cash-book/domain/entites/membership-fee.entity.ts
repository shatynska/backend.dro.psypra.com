import { AmountOfMoney } from '../value-objects/amount-of-money.value-object';
import { Member } from '../value-objects/member.value-object';
import { Month } from '../value-objects/month.value-object';
import { Uuid } from '../value-objects/uuid.value-object';

export class MembershipFee {
  private readonly id: Uuid;
  private amount: AmountOfMoney;
  private month: Month;
  private member: Member;
}
