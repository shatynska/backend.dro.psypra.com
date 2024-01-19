import { DomainError } from './domain.error';

export class DomainErrors extends AggregateError {
  constructor(errors: DomainError[] = [], message?: string) {
    super(errors, message);
  }

  public getJoinedMessages(): string {
    return this.getMessages(this).join('. ');
  }

  private getMessages(domainErrors: DomainErrors): string[] {
    const stack: DomainErrors[] = [domainErrors];
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
