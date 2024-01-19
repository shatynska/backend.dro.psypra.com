import { AggregateDomainError } from '~/shared/domain/errors';

export class AmountOfMoneyCreationError extends AggregateDomainError {
  // TODO Replace message with constant
  static readonly message = 'Не вдається створити грошову суму';

  constructor(
    errors: Error[] = [],
    message: string = AmountOfMoneyCreationError.message,
  ) {
    super(errors, message);
  }
}
