import { ShouldNotBeNegativeNumberError } from '../errors';
import { Rule } from './rule';

export class ShouldNotBeNegativeNumberRule implements Rule {
  constructor(private value: number) {}

  public error = new ShouldNotBeNegativeNumberError();

  public isBroken(): boolean {
    return typeof this.value !== 'number' || this.value >= 0 === false;
  }
}
