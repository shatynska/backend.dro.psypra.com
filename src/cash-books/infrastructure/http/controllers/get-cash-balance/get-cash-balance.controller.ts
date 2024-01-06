import { ApiErrorDecorator, Public } from '@common/decorators';
import {
  BadRequestException,
  Controller,
  Get,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetCashBalanceQuery } from '~/cash-books/application/queries/get-cash-balance/get-cash-balance.query';
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
  @ApiErrorDecorator(HttpStatus.BAD_REQUEST, 'Bad Request')
  @Get('cash-balance/:id')
  async getCashBalance(
    @Param('id') id: string,
  ): Promise<CashBalanceResponseDto> {
    const cashBalance = await this.queryBus.execute(
      new GetCashBalanceQuery(id),
    );

    if (cashBalance.isFailure()) {
      throw new BadRequestException(cashBalance.value.message);
    }

    return new CashBalanceResponseDto(cashBalance.value);
  }
}
