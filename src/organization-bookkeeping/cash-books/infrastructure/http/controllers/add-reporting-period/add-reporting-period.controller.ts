import { ApiErrorDecorator, Public } from '@common/decorators';
import {
  BadRequestException,
  Body,
  Controller,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Result } from '~/shared/core/result';
import { AggregateDomainError } from '~/shared/domain/errors';
import { AddReportingPeriodCommand } from '../../../../application/commands/add-reporting-period/add-reporting-period.command';
import { CashBookNotFoundError } from '../../../../application/errors/cash-book-not-found.error';
import { ReportingPeriodCreationError } from '../../../../domain/errors';
import { AddReportingPeriodRequestDto } from '../../dto/requests/add-reporting-period.request.dto';

@Controller('cash-books')
@Public()
@ApiTags('cash-books')
export class AddReportingPeriodController {
  constructor(private readonly commandBus: CommandBus) {}
  @ApiResponse({ status: 201 })
  @ApiErrorDecorator(
    HttpStatus.BAD_REQUEST,
    ReportingPeriodCreationError.defaultMessage,
  )
  @Post(':id/reporting-periods')
  async execute(@Body() dto: AddReportingPeriodRequestDto): Promise<void> {
    const result = await this.commandBus.execute<
      AddReportingPeriodCommand,
      Result<CashBookNotFoundError | ReportingPeriodCreationError, null>
    >(new AddReportingPeriodCommand(dto));

    if (result && result.isFailure()) {
      const error = result.value;

      // TODO Type fo find better way to get messages
      const errorMessage =
        error instanceof AggregateDomainError
          ? error.getJoinedMessages()
          : error.message;

      throw new BadRequestException(errorMessage);
    }
  }
}
