import { ShouldBeUniqueError } from '../errors';
import { Rule } from './rule';

export class ShouldBeUniqueRule implements Rule {
  constructor(
    private value: boolean,
    public isBreakable: boolean = false,
    private customErrorMessage?: string,
  ) {}

  public error = new ShouldBeUniqueError(this.customErrorMessage);

  public isBroken(): boolean {
    return this.value === false;
  }
}
