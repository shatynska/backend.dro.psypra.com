import { Public } from '@common/decorators';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CashBooksService } from '~/cash-books/application/cash-books.service';
import { CashBalanceResponseDto } from '../../dto';

@Controller('cash-books')
@Public()
@ApiTags('cash-books')
export class GetCashBalanceController {
  constructor(private readonly cashBooksService: CashBooksService) {}

  @Get('cash-balance')
  async getCashBalance(): Promise<CashBalanceResponseDto> {
    const cashBalance = await this.cashBooksService.findCashBalance();
    return new CashBalanceResponseDto(cashBalance);
  }
}
