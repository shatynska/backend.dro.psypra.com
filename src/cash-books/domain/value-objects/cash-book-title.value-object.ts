import { ValueObject } from '~/shared/domain/domain/value-objects/value-object';

export class CashBookTitle extends ValueObject {
  constructor(private readonly title: string) {
    super();
  }
  // TODO
}
