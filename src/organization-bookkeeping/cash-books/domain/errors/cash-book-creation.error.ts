import { AggregateDomainError, DomainError } from '~/shared/domain/errors';

export class CashBookCreationError extends AggregateDomainError {
  // TODO Replace message with constant
  static readonly defaultMessage = 'Помилка при створенні касової книги';

  constructor(
    errors: DomainError[] = [],
    message: string = CashBookCreationError.defaultMessage,
  ) {
    super(errors, message);
  }
}
