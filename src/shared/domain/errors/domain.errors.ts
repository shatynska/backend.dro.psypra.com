import { DomainError } from './domain.error';

export class DomainErrors extends AggregateError {
  constructor(errors: DomainError[] = [], message?: string) {
    super(errors, message);
  }
}
