import { Module } from '@nestjs/common';
import { CashBooksService } from '../../application/cash-books.service';
import { CashBooksController } from './controllers/cash-books.controller';
import { GetCashBalanceController } from './controllers/get-cash-balance/get-cash-balance.controller';

@Module({
  controllers: [GetCashBalanceController, CashBooksController],
  providers: [CashBooksService],
})
export class HttpModule {}
