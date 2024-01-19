import { DomainError } from '../errors';
import { Rule } from './rule';

export class ShouldBeWithinLengthRangeRule implements Rule {
  constructor(
    private value: string,
    private minLength: number,
    private maxLength: number,
  ) {}

  // TODO Replace message with constant
  public error = new DomainError(
    `Значення повинно бути довжиною від ${this.minLength} до ${this.maxLength} символів`,
  );

  public isBroken(): boolean {
    const length = this.value.length;
    return (length >= this.minLength && length <= this.maxLength) === false;
  }
}
