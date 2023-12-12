import { Public } from '@common/decorators';
import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CashBooksService } from './cash-books.service';
import { CashBalanceResponseDto } from './dto';
import {
  CashBookResponseDto,
  CashBooksResponseDto,
} from './dto/cash-book.response.dto';
import { CurrentCashBookStub } from './stubs/current-cash-book.stub';

@Controller('cash-books')
@Public()
@ApiTags('cash-books')
export class CashBooksController {
  constructor(private readonly cashBooksService: CashBooksService) {}

  @Get('cash-balance')
  async getCashBalance(): Promise<CashBalanceResponseDto> {
    const cashBalance = await this.cashBooksService.findCashBalance();
    return new CashBalanceResponseDto(cashBalance);
  }

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  async findAllCashBooks(): Promise<CashBooksResponseDto> {
    const cashBooks = await this.cashBooksService.findAllCashBooks();
    const response = new CashBooksResponseDto();
    response.cashBooks = cashBooks;
    return response;
  }

  @Get(':id')
  async findCashBookById(
    @Param('id') id: string,
  ): Promise<CashBookResponseDto> {
    const cashBook = await this.cashBooksService.findCashBookById(id);
    return new CashBookResponseDto(cashBook);
  }

  @Get('current')
  getCurrentCashBooks() {
    return CurrentCashBookStub;
  }
}
