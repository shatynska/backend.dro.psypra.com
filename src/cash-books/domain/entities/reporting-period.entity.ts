import { Result, failure, success } from '~/shared/core/result';
import { Entity } from '~/shared/domain/entities';
import { Title } from '~/shared/domain/value-objects';
import { Uuid } from '~/shared/domain/value-objects/uuid.value-object';
import { ReportingPeriodCreationError } from '../errors';

export type ReportingPeriodPrimitives = {
  id: string;
  title: string;
};

export type CreateReportingPeriodParameters = Pick<
  ReportingPeriodPrimitives,
  'title'
> & { isTitleUnique: boolean };

export class ReportingPeriod extends Entity {
  private constructor(
    private id: Uuid,
    private title: Title,
  ) {
    super();
  }

  static create(
    params: CreateReportingPeriodParameters,
  ): Result<ReportingPeriodCreationError, ReportingPeriod> {
    const { title: titleValue, isTitleUnique } = params;

    const creatingError = new ReportingPeriodCreationError();

    const title = Title.create({
      value: titleValue,
      isUnique: isTitleUnique,
    });

    if (title.isFailure()) {
      creatingError.errors.push(title.value);
    }

    const id = Uuid.create();

    if (creatingError.errors.length > 0) {
      return failure(creatingError);
    }

    const reportingPeriod = new ReportingPeriod(
      id.value as Uuid,
      title.value as Title,
    );

    return success(reportingPeriod);
  }

  mapToPrimitives(): ReportingPeriodPrimitives {
    const mappedReportingPeriod = {
      id: this.id.getValue(),
      title: this.title.getValue(),
    };

    return mappedReportingPeriod;
  }
}
