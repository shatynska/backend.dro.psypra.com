import { v4 as uuid } from 'uuid';
import { ValueObject } from './value-object';

export class Uuid extends ValueObject {
  readonly value: string;

  constructor() {
    super();
    this.value = uuid();
  }
}
