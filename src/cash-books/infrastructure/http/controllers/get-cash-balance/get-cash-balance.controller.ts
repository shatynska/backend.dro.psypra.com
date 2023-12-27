import { Public } from '@common/decorators';
import { BadRequestException, Controller, Get } from '@nestjs/common';
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
    const result = await this.cashBooksService.findCashBalance();

    if (result.isLeft()) {
      const error = result.value;
      throw new BadRequestException(error.message);
    }
    return new CashBalanceResponseDto(result.value);
  }
}
