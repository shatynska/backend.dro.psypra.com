import { IsNotEmpty, IsString } from 'class-validator';
import { AddReportingPeriodDto } from '~/cash-books/application/dto/add-reporting-period.dto';

export class AddReportingPeriodRequestDto implements AddReportingPeriodDto {
  @IsNotEmpty()
  @IsString()
  cashBookId: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  startDate: string;

  @IsNotEmpty()
  @IsString()
  endDate: string;
}
