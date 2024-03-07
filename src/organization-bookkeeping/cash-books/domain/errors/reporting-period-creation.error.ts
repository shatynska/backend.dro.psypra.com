import { AggregateDomainError, DomainError } from '~/shared/domain/errors';

export class ReportingPeriodCreationError extends AggregateDomainError {
  // TODO Replace message with constant
  static readonly defaultMessage = 'Помилка при створенні звітнього періоду';

  constructor(
    errors: DomainError[] = [],
    message: string = ReportingPeriodCreationError.defaultMessage,
  ) {
    super(errors, message);
  }
}
