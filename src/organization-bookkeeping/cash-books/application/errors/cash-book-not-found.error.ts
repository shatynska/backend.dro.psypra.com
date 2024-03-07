import { NotFoundError } from '~/shared/application/errors/not-found.error';

export class CashBookNotFoundError extends NotFoundError {
  // TODO Replace message with constant
  static readonly defaultMessage = 'Касова книга не знайдена';

  constructor(message: string = CashBookNotFoundError.defaultMessage) {
    super(message);
  }
}
