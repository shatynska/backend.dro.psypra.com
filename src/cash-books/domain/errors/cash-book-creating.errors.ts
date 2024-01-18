import { DomainError, DomainErrors } from '~/shared/domain/errors';

export class CashBookCreatingErrors extends DomainErrors {
  // TODO Replace message with constant
  static readonly message = 'Помилка при створенні касової книги';

  constructor(
    errors: DomainError[] = [],
    message: string = CashBookCreatingErrors.message,
  ) {
    super(errors, message);
  }
}
