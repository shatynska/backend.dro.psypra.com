import { DomainError } from './domain.error';

export class ShouldNotBeNegativeNumberError extends DomainError {
  // TODO Replace message with constant
  static readonly defaultMessage = 'Значення не повинно бути меншим за нуль';

  constructor(message: string = ShouldNotBeNegativeNumberError.defaultMessage) {
    super(message);
  }
}
