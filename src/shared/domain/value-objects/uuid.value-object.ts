import { v4 as uuid } from 'uuid';
import { Result, failure, success } from '~/shared/core/result';
import { UuidCreationError } from '../errors';
import { ShouldBeUuidV4Rule } from '../rules';
import { ValueObject } from './value-object';

export class Uuid extends ValueObject<string> {
  static create(): Result<UuidCreationError, Uuid> {
    const value = uuid();

    const errors = this.validate([new ShouldBeUuidV4Rule(value)]);

    if (errors.length > 0) {
      return failure(new UuidCreationError([...errors]));
    }

    return success(new Uuid(value));
  }

  static reconstitute(value: string): Uuid {
    return new Uuid(value);
  }
}
