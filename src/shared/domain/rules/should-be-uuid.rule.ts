import { DomainError } from '../errors';
import { Rule } from './rule';

export class ShouldBeUuidV4Rule implements Rule {
  constructor(private value: string) {}

  // TODO Replace message with constant
  public error = new DomainError('Значення повинно бути в форматі UUID v4');

  public isBroken(): boolean {
    const regex =
      /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
    return regex.test(this.value) === false;
  }
}
