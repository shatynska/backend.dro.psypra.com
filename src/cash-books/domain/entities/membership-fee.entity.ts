import { Entity } from '~/shared/domain/entities';
import { Uuid } from '~/shared/domain/value-objects';
import { AmountOfMoney } from '../value-objects';
import { Member } from './member.entity';
import { ReportingMonth } from './reporting-month.entity';

export class MembershipFee extends Entity {
  private readonly id: Uuid;
  private amount: AmountOfMoney;
  private reportingMonth: ReportingMonth;
  private member: Member;
}
