import { ShouldBeUuidV4Error } from '../errors';
import { Rule } from './rule';

export class ShouldBeUuidV4Rule implements Rule {
  constructor(
    private value: string,
    public isBreakable: boolean = false,
    private customErrorMessage?: string,
  ) {}

  public error = new ShouldBeUuidV4Error(this.customErrorMessage);

  public isBroken(): boolean {
    const regex =
      /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
    return typeof this.value !== 'string' || regex.test(this.value) === false;
  }
}
