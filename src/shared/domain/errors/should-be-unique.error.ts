import { DomainError } from './domain.error';

export class ShouldBeUniqueError extends DomainError {
  // TODO Replace message with constant
  static readonly defaultMessage = 'Це значення вже використовується';

  constructor(message: string = ShouldBeUniqueError.defaultMessage) {
    super(message);
  }
}
