import { Entity } from '~/shared/domain/domain/entities/entity';
import { Uuid } from '~/shared/domain/domain/value-objects/uuid.value-object';
import { AmountOfMoney } from '../value-objects/amount-of-money.value-object';
import { Month } from '../value-objects/month.value-object';
import { Member } from './member.entity';

export class MembershipFee extends Entity {
  private readonly id: Uuid;
  private amount: AmountOfMoney;
  private month: Month;
  private member: Member;
}
