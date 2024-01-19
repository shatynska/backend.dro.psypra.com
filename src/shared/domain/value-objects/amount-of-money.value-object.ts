import { Result, failure, success } from '~/shared/core/result';
import { AmountOfMoneyCreationError } from '../errors';
import { ShouldNotBeNegativeNumberRule } from '../rules';
import { ValueObject } from './value-object';

export class AmountOfMoney extends ValueObject<number> {
  static create(
    value: number,
  ): Result<AmountOfMoneyCreationError, AmountOfMoney> {
    const errors = this.validate([new ShouldNotBeNegativeNumberRule(value)]);

    if (errors.length > 0) {
      return failure(new AmountOfMoneyCreationError([...errors]));
    }

    return success(new AmountOfMoney(value));
  }

  static reconstitute(value: number): AmountOfMoney {
    return new AmountOfMoney(value);
  }
}
