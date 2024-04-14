import { Entity } from '~/shared/domain/entities';
import { AmountOfMoney, Uuid } from '~/shared/domain/value-objects';
import { Member } from './member.entity';

export class MembershipFee extends Entity {
  private readonly id!: Uuid;
  private amount!: AmountOfMoney;
  private reportingMonthId!: Uuid;
  private member!: Member;
}
