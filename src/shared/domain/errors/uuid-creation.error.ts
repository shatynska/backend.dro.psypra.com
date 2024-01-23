import { AggregateDomainError, DomainError } from '~/shared/domain/errors';

export class UuidCreationError extends AggregateDomainError {
  // TODO Replace message with constant
  static readonly defaultMessage = 'Не вдається створити ідентифікатор';

  constructor(
    errors: DomainError[] = [],
    message: string = UuidCreationError.defaultMessage,
  ) {
    super(errors, message);
  }
}
