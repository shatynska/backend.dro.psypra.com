import { Result, failure, success } from '~/shared/core/result';
import { AmountOfMoneyCreationError } from '../errors';
import { ShouldNotBeNegativeNumberRule } from '../rules';
import { ValueObject } from './value-object';

type AmountOfMoneyPrimitives = {
  value: number;
};

type CreateAmountOfMoneyParameters = AmountOfMoneyPrimitives;

export class AmountOfMoney extends ValueObject<number> {
  static create(
    params: CreateAmountOfMoneyParameters,
  ): Result<AmountOfMoneyCreationError, AmountOfMoney> {
    const { value } = params;

    const errors = this.validate([new ShouldNotBeNegativeNumberRule(value)]);

    if (errors.length > 0) {
      return failure(new AmountOfMoneyCreationError([...errors]));
    }

    return success(new AmountOfMoney(value));
  }

  static reconstitute(params: AmountOfMoneyPrimitives): AmountOfMoney {
    const { value } = params;

    return new AmountOfMoney(value);
  }
}
