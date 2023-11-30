import { Module } from '@nestjs/common';
import { CashBooksController } from './cash-books.controller';
import { CashBooksService } from './cash-books.service';

@Module({
  imports: [],
  controllers: [CashBooksController],
  providers: [CashBooksService],
})
export class CashBooksModule {}
