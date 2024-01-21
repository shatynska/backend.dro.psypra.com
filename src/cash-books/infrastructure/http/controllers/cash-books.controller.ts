import { Public } from '@common/decorators';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CurrentCashBookResponseDtoStub } from '../dto/responses/current-cash-book.response.dto.stub';

@Controller('cash-books')
@Public()
@ApiTags('cash-books')
export class CashBooksController {
  @Get('current')
  getCurrentCashBooks() {
    return CurrentCashBookResponseDtoStub;
  }
}
