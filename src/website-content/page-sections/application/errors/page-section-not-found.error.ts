import { NotFoundError } from '~/shared/application/errors/not-found.error';

export class PageSectionNotFoundError extends NotFoundError {
  // TODO Replace message with constant
  static readonly defaultMessage = 'Секція не знайдена ';

  constructor(message: string = PageSectionNotFoundError.defaultMessage) {
    super(message);
  }
}
