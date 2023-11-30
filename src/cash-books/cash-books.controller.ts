import { Public } from '@common/decorators';
import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CashBooksService } from './cash-books.service';
import { CashBalanceResponseDto } from './dto';
import { CurrentCashBookStub } from './stubs/current-cash-book.stub';

@Controller('cash-books')
@Public()
@ApiTags('cash-books')
export class CashBooksController {
  constructor(private readonly cashBooksService: CashBooksService) {}

  @Get('cash-balance')
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiResponse({
    status: 200,
    type: CashBalanceResponseDto,
  })
  async getCashBalance() {
    const cashBalance = await this.cashBooksService.findCashBalance();
    return new CashBalanceResponseDto(cashBalance);
  }

  @Get('current')
  getCurrentCashBooks() {
    return CurrentCashBookStub;
  }
}
