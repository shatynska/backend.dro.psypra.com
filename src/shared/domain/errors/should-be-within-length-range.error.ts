import { DomainError } from './domain.error';

export class ShouldBeWithinLengthRangeError extends DomainError {
  // TODO Replace message with constant
  static readonly defaultMessage = 'Значення повинно бути невизначеної довжини';

  constructor(message: string = ShouldBeWithinLengthRangeError.defaultMessage) {
    super(message);
  }
}
