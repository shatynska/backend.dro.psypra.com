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
import { AddReportingPeriodCommand } from '~/cash-books/application/commands/add-reporting-period/add-reporting-period.command';
import { CashBookNotFoundError } from '~/cash-books/application/errors/cash-book-not-found.error';
import { ReportingPeriodCreationError } from '~/cash-books/domain/errors';
import { Result } from '~/shared/core/result';
import { AggregateDomainError } from '~/shared/domain/errors';
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
  @ApiErrorDecorator(
    HttpStatus.BAD_REQUEST,
    CashBookNotFoundError.defaultMessage,
  )
  @Post(':id/reporting-periods')
  async execute(@Body() dto: AddReportingPeriodRequestDto): Promise<void> {
    const result: Result<
      CashBookNotFoundError | ReportingPeriodCreationError,
      void
    > = await this.commandBus.execute(new AddReportingPeriodCommand(dto));

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
