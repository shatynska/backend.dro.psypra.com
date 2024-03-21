import { NotFoundError } from '~/shared/application/errors/not-found.error';

export class SpecialistNotFoundError extends NotFoundError {
  // TODO Replace message with constant
  static readonly defaultMessage = 'Спеціаліст не знайдений';

  constructor(message: string = SpecialistNotFoundError.defaultMessage) {
    super(message);
  }
}
