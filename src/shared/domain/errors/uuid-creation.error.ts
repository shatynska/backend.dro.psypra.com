import { AggregateDomainError } from '~/shared/domain/errors';

export class UuidCreationError extends AggregateDomainError {
  // TODO Replace message with constant
  static readonly message = 'Не вдається створити ідентифікатор';

  constructor(
    errors: Error[] = [],
    message: string = UuidCreationError.message,
  ) {
    super(errors, message);
  }
}
