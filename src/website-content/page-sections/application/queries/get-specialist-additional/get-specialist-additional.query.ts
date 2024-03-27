export class GetSpecialistAdditionalQuery {
  constructor(
    public readonly specialistAlias: string,
    public readonly sectionAlias: string,
  ) {}
}
