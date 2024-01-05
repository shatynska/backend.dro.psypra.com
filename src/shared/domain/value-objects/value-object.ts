export abstract class ValueObject<T> {
  constructor(protected readonly value: T) {
    this.value = Object.freeze(value);
  }

  public getValue() {
    return this.value;
  }
}
