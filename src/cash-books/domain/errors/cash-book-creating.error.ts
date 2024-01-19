import { AggregateDomainError, DomainError } from '~/shared/domain/errors';

export class CashBookCreatingError extends AggregateDomainError {
  // TODO Replace message with constant
  static readonly message = 'Помилка при створенні касової книги';

  constructor(
    errors: DomainError[] = [],
    message: string = CashBookCreatingError.message,
  ) {
    super(errors, message);
  }
}
