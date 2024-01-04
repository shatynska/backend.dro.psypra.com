import { Public } from '@common/decorators';
import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ApiTags } from '@nestjs/swagger';
import { GetCashBalanceQuery } from '~/cash-books/application/queries/get-cash-balance/get-cash-balance.query';
import { CashBalanceResponseDto } from '../../dto';

@Controller('cash-books')
@Public()
@ApiTags('cash-books')
export class GetCashBalanceController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get('cash-balance/:id')
  async getCashBalance(
    @Param('id') id: string,
  ): Promise<CashBalanceResponseDto> {
    const result = await this.queryBus.execute(new GetCashBalanceQuery(id));

    if (result.isFailure()) {
      const error = result.value;
      throw new BadRequestException(error.message);
    }
    return new CashBalanceResponseDto(result.value);
  }
}
