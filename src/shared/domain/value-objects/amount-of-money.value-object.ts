import { Result, failure, success } from '~/shared/core/result';
import { DomainErrors } from '~/shared/domain/errors/domain.errors';
import { ShouldNotBeNegativeNumberRule } from '~/shared/domain/rules/should-not-be-negative-number.rule';
import { ValueObject } from '~/shared/domain/value-objects';

export class AmountOfMoney extends ValueObject<number> {
  static create(value: number): Result<DomainErrors, AmountOfMoney> {
    const validation = this.validate([
      new ShouldNotBeNegativeNumberRule(value),
    ]);

    if (validation.isFailure()) {
      // TODO Replace message with constant
      validation.value.message = 'Помилка в сумі';

      return failure(validation.value);
    }

    return success(new AmountOfMoney(value));
  }

  static reconstitute(value: number): AmountOfMoney {
    return new AmountOfMoney(value);
  }
}
