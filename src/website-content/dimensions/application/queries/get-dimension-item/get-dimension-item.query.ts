export class GetDimensionItemQuery {
  constructor(
    public readonly dimensionAlias: string,
    public readonly alias: string,
  ) {}
}
