import { DomainError } from './domain.error';

export class AggregateDomainError extends AggregateError {
  constructor(errors: DomainError[] = [], message?: string) {
    super(errors, message);
  }

  public getJoinedMessages(): string {
    return this.getMessages(this).join('. ');
  }

  private getMessages(aggregateDomainError: AggregateDomainError): string[] {
    const stack: AggregateDomainError[] = [aggregateDomainError];
    const messages: string[] = [];

    while (stack.length > 0) {
      const error = stack.pop();
      if (error) {
        messages.push(error.message);

        if (error.errors) {
          stack.push(...error.errors);
        }
      }
    }

    return messages;
  }
}
