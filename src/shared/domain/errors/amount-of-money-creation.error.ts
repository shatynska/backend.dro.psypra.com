import { AggregateDomainError, DomainError } from '~/shared/domain/errors';

export class AmountOfMoneyCreationError extends AggregateDomainError {
  // TODO Replace message with constant
  static readonly defaultMessage = 'Не вдається створити грошову суму';

  constructor(
    errors: DomainError[] = [],
    message: string = AmountOfMoneyCreationError.defaultMessage,
  ) {
    super(errors, message);
  }
}
