import { Result, failure, success } from '~/shared/core/result';
import { DomainErrors } from '../errors/domain.errors';
import { ShouldBeWithinLengthRangeRule } from '../rules/should-be-within-length-range.rule';
import { ValueObject } from './value-object';

export class Title extends ValueObject<string> {
  private static MIN_LENGTH: number = 2;
  private static MAX_LENGTH: number = 10;

  static create(value: string): Result<DomainErrors, Title> {
    const validation = this.validate([
      new ShouldBeWithinLengthRangeRule(
        value,
        this.MIN_LENGTH,
        this.MAX_LENGTH,
      ),
    ]);

    if (validation.isFailure()) {
      // TODO Replace message with constant
      validation.value.message = 'Помилка в назві';

      return failure(validation.value);
    }

    return success(new Title(value));
  }

  static reconstitute(value: string): Title {
    return new Title(value);
  }
}
