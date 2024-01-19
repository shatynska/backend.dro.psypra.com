import { DomainError } from '../errors';
import { Rule } from '../rules';

export abstract class ValueObject<T> {
  protected constructor(protected readonly value: T) {
    this.value = Object.freeze(value);
  }

  protected static validate(rules: Rule[]): DomainError[] {
    const errors: DomainError[] = [];

    for (const rule of rules) {
      if (rule.isBroken()) {
        errors.push(rule.error);
      }
    }

    return errors;
  }

  public getValue() {
    return this.value;
  }
}
