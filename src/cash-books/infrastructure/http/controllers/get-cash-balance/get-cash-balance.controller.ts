import { ApiErrorDecorator, Public } from '@common/decorators';
import {
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CashBalanceDto } from '~/cash-books/application/dto/cash-balance.dto';
import { CashBookNotFoundError } from '~/cash-books/application/errors/cash-book-not-found.error';
import { GetCashBalanceQuery } from '~/cash-books/application/queries/get-cash-balance/get-cash-balance.query';
import { Result } from '~/shared/core/result';
import { CashBalanceResponseDto } from '../../dto/responses/cash-balance.response.dto';

@Controller('cash-books')
@Public()
@ApiTags('cash-books')
export class GetCashBalanceController {
  constructor(private readonly queryBus: QueryBus) {}

  @ApiResponse({
    status: 200,
    type: CashBalanceResponseDto,
  })
  @ApiErrorDecorator(HttpStatus.NOT_FOUND, CashBookNotFoundError.defaultMessage)
  @Get(':id/cash-balance')
  async getCashBalance(
    @Param('id') id: string,
  ): Promise<CashBalanceResponseDto> {
    const cashBalance: Result<CashBookNotFoundError, CashBalanceDto> =
      await this.queryBus.execute(new GetCashBalanceQuery(id));

    if (cashBalance.isFailure()) {
      throw new NotFoundException(cashBalance.value.message);
    }

    return new CashBalanceResponseDto(cashBalance.value);
  }
}
