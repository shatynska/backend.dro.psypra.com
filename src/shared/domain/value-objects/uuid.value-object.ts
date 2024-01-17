import { v4 as uuid } from 'uuid';
import { Result, failure, success } from '~/shared/core/result';
import { DomainErrors } from '~/shared/domain/errors/domain.errors';
import { ShouldBeUuidV4Rule } from '../rules/should-be-uuid.rule';
import { ValueObject } from './value-object';

export class Uuid extends ValueObject<string> {
  static create(): Result<DomainErrors, Uuid> {
    const value = uuid();

    const validation = this.validate([new ShouldBeUuidV4Rule(value)]);

    if (validation.isFailure()) {
      // TODO Replace message with constant
      validation.value.message = 'Помилка в ідентифікаторі';

      return failure(validation.value);
    }

    return success(new Uuid(value));
  }

  static reconstitute(value: string): Uuid {
    return new Uuid(value);
  }
}
