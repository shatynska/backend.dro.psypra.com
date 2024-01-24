import { Entity } from '~/shared/domain/entities';
import { Title } from '~/shared/domain/value-objects';
import { Uuid } from '~/shared/domain/value-objects/uuid.value-object';

export type ReportingPeriodPrimitives = {
  id: string;
  title: string;
};

export class ReportingPeriod extends Entity {
  private constructor(
    private id: Uuid,
    private title: Title,
  ) {
    super();
  }

  mapToPrimitives(): ReportingPeriodPrimitives {
    const mappedReportingPeriod = {
      id: this.id.getValue(),
      title: this.title.getValue(),
    };

    return mappedReportingPeriod;
  }
}
