import { NotFoundError } from '~/shared/application/errors/not-found.error';

export class SectionNotFoundError extends NotFoundError {
  // TODO Replace message with constant

  static readonly defaultMessage = `Секцію не знайдено`;

  constructor(message: string = SectionNotFoundError.defaultMessage) {
    super(message);
  }
}
