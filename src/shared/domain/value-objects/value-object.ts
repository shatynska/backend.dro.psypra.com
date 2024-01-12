import { Result, failure, success } from '~/shared/core/result';
import { DomainErrors } from '../errors/domain.errors';
import { Rule } from '../rules/rule';

export abstract class ValueObject<T> {
  protected constructor(protected readonly value: T) {
    this.value = Object.freeze(value);
  }

  protected static validate(rules: Rule[]): Result<DomainErrors, true> {
    const domainErrors: DomainErrors = new DomainErrors([]);

    for (const rule of rules) {
      if (rule.isBroken()) {
        domainErrors.errors.push(rule.error);
      }
    }

    if (domainErrors.errors.length > 0) {
      return failure(domainErrors);
    }

    return success(true);
  }

  public getValue() {
    return this.value;
  }
}
