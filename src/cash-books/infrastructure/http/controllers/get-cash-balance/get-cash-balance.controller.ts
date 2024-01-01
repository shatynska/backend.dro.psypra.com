import { Public } from '@common/decorators';
import { BadRequestException, Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ApiTags } from '@nestjs/swagger';
import { GetCashBalanceQuery } from '~/cash-books/application/queries/get-cash-balance/get-cash-balance.query';
import { CashBalanceResponseDto } from '../../dto';

@Controller('cash-books')
@Public()
@ApiTags('cash-books')
export class GetCashBalanceController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get('cash-balance')
  async getCashBalance(): Promise<CashBalanceResponseDto> {
    const result = await this.queryBus.execute(new GetCashBalanceQuery());

    if (result.isFailure()) {
      const error = result.value;
      throw new BadRequestException(error.message);
    }
    return new CashBalanceResponseDto(result.value);
  }
}
