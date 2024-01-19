import { DomainError } from '../errors';
import { Rule } from './rule';

export class ShouldNotBeNegativeNumberRule implements Rule {
  constructor(private value: number) {}

  // TODO Replace message with constant
  public error = new DomainError('Значення не повинно бути меншим за нуль');

  public isBroken(): boolean {
    return this.value >= 0 === false;
  }
}
