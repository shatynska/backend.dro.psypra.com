import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CashBooksModule } from './cash-books/cash-books.module';
import { CONTROLLERS as CASH_BOOKS_CONTROLLERS } from './cash-books/infrastructure/http/controllers';

@Module({
  imports: [CqrsModule, CashBooksModule],
  controllers: [...CASH_BOOKS_CONTROLLERS],
})
export class OrganizationBookkeepingModule {}
