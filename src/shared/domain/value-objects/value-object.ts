export abstract class ValueObject<T> {
  readonly props: T;

  constructor(props: T) {
    this.props = Object.freeze(props);
  }

  public getValue() {
    return this.props;
  }
}
