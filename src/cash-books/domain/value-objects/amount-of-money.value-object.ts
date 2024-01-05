import { failure } from '~/shared/core/result';
import { ValueObject } from '~/shared/domain/value-objects';

export class AmountOfMoney extends ValueObject<number> {
  constructor(value: number = 0) {
    super(value);
    this.validate();
  }

  private validate() {
    if (this.value < 0) {
      return failure(new Error());
    }
  }
}
