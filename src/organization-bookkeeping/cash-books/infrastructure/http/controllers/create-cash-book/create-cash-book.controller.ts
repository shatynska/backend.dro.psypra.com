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
import { CreateCashBookCommand } from '~/cash-books/application/commands/create-cash-book/create-cash-book.command';
import { CashBookCreationError } from '~/cash-books/domain/errors';
import { Result } from '~/shared/core/result';
import { CreateCashBookRequestDto } from '../../dto/requests/create-cash-book.request.dto';

@Controller('cash-books')
@Public()
@ApiTags('cash-books')
export class CreateCashBookController {
  constructor(private readonly commandBus: CommandBus) {}

  @ApiResponse({ status: 201 })
  @ApiErrorDecorator(
    HttpStatus.BAD_REQUEST,
    CashBookCreationError.defaultMessage,
  )
  @Post()
  async execute(@Body() dto: CreateCashBookRequestDto): Promise<void> {
    const result = await this.commandBus.execute<
      CreateCashBookCommand,
      Result<CashBookCreationError, null>
    >(new CreateCashBookCommand(dto));

    // TODO Figure out why result may return undefined
    if (result && result.isFailure()) {
      throw new BadRequestException(result.value.getJoinedMessages());
    }
  }
}
