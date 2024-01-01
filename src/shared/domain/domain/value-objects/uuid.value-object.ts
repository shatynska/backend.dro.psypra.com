import { v4 as uuid } from 'uuid';

export class Uuid {
  readonly value: string;

  constructor() {
    this.value = uuid();
  }
}
