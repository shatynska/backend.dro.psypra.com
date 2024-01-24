import { Result, failure, success } from '~/shared/core/result';
import { TitleCreationError } from '../errors';
import { ShouldBeUniqueRule, ShouldBeWithinLengthRangeRule } from '../rules';
import { ValueObject } from './value-object';

type TitlePrimitives = {
  value: string;
};

type CreateTitleParameters = TitlePrimitives & {
  isUnique: boolean;
};

export class Title extends ValueObject<string> {
  private static MIN_LENGTH: number = 2;
  private static MAX_LENGTH: number = 50;

  static create(
    params: CreateTitleParameters,
  ): Result<TitleCreationError, Title> {
    const { isUnique, value } = params;

    const errors = this.validate([
      new ShouldBeUniqueRule(isUnique),
      new ShouldBeWithinLengthRangeRule(
        value,
        this.MIN_LENGTH,
        this.MAX_LENGTH,
      ),
    ]);

    if (errors.length > 0) {
      return failure(new TitleCreationError([...errors]));
    }

    return success(new Title(value));
  }

  static reconstitute(params: TitlePrimitives): Title {
    const { value } = params;

    return new Title(value);
  }
}
