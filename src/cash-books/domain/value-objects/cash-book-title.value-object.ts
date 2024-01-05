import { failure } from '~/shared/core/result';
import { ValueObject } from '~/shared/domain/value-objects';

export class CashBookTitle extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.validate();
  }

  private validate() {
    const length = this.value.length;
    if (length < 2 && length > 50) {
      return failure(new Error());
    }
  }
}
