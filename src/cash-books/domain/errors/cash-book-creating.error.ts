import { AggregateDomainError, DomainError } from '~/shared/domain/errors';

export class CashBookCreatingError extends AggregateDomainError {
  // TODO Replace message with constant
  static readonly defaultMessage = 'Помилка при створенні касової книги';

  constructor(
    errors: DomainError[] = [],
    message: string = CashBookCreatingError.defaultMessage,
  ) {
    super(errors, message);
  }
}
