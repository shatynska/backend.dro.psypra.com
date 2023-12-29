import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { GetCashBalanceHandler } from '~/cash-books/application/queries/get-cash-balance/get-cash-balance.handle';
import { CashBooksService } from '../../application/cash-books.service';
import { CashBooksController } from './controllers/cash-books.controller';
import { GetCashBalanceController } from './controllers/get-cash-balance/get-cash-balance.controller';

@Module({
  imports: [CqrsModule],
  controllers: [GetCashBalanceController, CashBooksController],
  providers: [CashBooksService, GetCashBalanceHandler],
})
export class HttpModule {}
