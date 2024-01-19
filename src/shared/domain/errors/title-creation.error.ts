import { AggregateDomainError } from '~/shared/domain/errors';

export class TitleCreationError extends AggregateDomainError {
  // TODO Replace message with constant
  static readonly message = 'Не вдається створити назву';

  constructor(
    errors: Error[] = [],
    message: string = TitleCreationError.message,
  ) {
    super(errors, message);
  }
}
