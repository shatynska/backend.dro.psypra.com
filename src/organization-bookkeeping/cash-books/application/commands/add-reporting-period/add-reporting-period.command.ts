import { AddReportingPeriodDto } from '../../dto/add-reporting-period.dto';

export class AddReportingPeriodCommand {
  constructor(public readonly params: AddReportingPeriodDto) {}
}
