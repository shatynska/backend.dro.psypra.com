import { ValueObject } from '~/shared/domain/value-objects';

export class CashBookTitle extends ValueObject {
  constructor(private readonly title: string) {
    super();
  }
  // TODO
}
