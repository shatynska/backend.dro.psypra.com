import { DomainError } from './domain.error';

export class ShouldBeUuidV4Error extends DomainError {
  // TODO Replace message with constant
  static readonly defaultMessage = 'Значення повинно бути в форматі UUID v4';

  constructor(message: string = ShouldBeUuidV4Error.defaultMessage) {
    super(message);
  }
}
