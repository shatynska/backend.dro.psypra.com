import { Public } from '@common/decorators';
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CashBooksService } from '../../../application/cash-books.service';
import {
  CashBookResponseDto,
  CashBooksResponseDto,
  CreateCashBookRequestDto,
} from '../dto';
import { CurrentCashBookResponseDtoStub } from '../dto/responses/current-cash-book.response.dto.stub';

@Controller('cash-books')
@Public()
@ApiTags('cash-books')
export class CashBooksController {
  constructor(private readonly cashBooksService: CashBooksService) {}

  @Get('current')
  getCurrentCashBooks() {
    return CurrentCashBookResponseDtoStub;
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

  @Post()
  async createCashBook(
    @Body() createCashBookRequestDto: CreateCashBookRequestDto,
  ): Promise<CashBookResponseDto> {
    const newCashBook = await this.cashBooksService.createCashBook(
      createCashBookRequestDto,
    );
    return new CashBookResponseDto(newCashBook);
  }
}
