import { DomainError } from '../errors';
import { Rule } from './rule';

export class ShouldBeUniqueRule implements Rule {
  constructor(private value: boolean) {}

  // TODO Replace message with constant
  public error = new DomainError('Значення повинно бути унікальним');

  public isBroken(): boolean {
    return this.value === false;
  }
}
