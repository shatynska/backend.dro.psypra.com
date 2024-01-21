import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateCashBookHandler } from '~/cash-books/application/commands/create-cash-book/create-cash-book.handle';
import { GetCashBalanceHandler } from '~/cash-books/application/queries/get-cash-balance/get-cash-balance.handle';
import { CashBooksService } from '../../application/cash-books.service';
import { PersistenceModule } from '../persistence/persistence.module';
import { CashBooksController } from './controllers/cash-books.controller';
import { CreateCashBookController } from './controllers/create-cash-book/create-cash-book.controller';
import { GetCashBalanceController } from './controllers/get-cash-balance/get-cash-balance.controller';

@Module({
  imports: [CqrsModule, PersistenceModule],
  controllers: [
    GetCashBalanceController,
    CreateCashBookController,
    CashBooksController,
  ],
  providers: [CashBooksService, GetCashBalanceHandler, CreateCashBookHandler],
})
export class HttpModule {}
