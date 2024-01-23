import { AggregateDomainError, DomainError } from '~/shared/domain/errors';

export class TitleCreationError extends AggregateDomainError {
  // TODO Replace message with constant
  static readonly defaultMessage = 'Не вдається створити назву';

  constructor(
    errors: DomainError[] = [],
    message: string = TitleCreationError.defaultMessage,
  ) {
    super(errors, message);
  }
}
