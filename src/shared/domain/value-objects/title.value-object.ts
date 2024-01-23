import { Result, failure, success } from '~/shared/core/result';
import { TitleCreationError } from '../errors';
import { ShouldBeUniqueRule, ShouldBeWithinLengthRangeRule } from '../rules';
import { ValueObject } from './value-object';

export class Title extends ValueObject<string> {
  private static MIN_LENGTH: number = 2;
  private static MAX_LENGTH: number = 50;

  static create(
    value: string,
    isUnique: boolean,
  ): Result<TitleCreationError, Title> {
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

  static reconstitute(value: string): Title {
    return new Title(value);
  }
}
