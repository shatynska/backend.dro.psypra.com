import { NotFoundError } from '~/shared/application/errors/not-found.error';

export class CashBookNotFoundError extends NotFoundError {
  // TODO Replace message with constant
  static readonly message = 'Касова книга не знайдена';

  constructor(customMessage?: string) {
    super(customMessage ? customMessage : CashBookNotFoundError.message);
  }
}
