import { Module } from '@nestjs/common';
import { CashBooksService } from './cash-books.service';
import { CashBooksController } from './infrastructure/http/cash-books.controller';

@Module({
  imports: [],
  controllers: [CashBooksController],
  providers: [CashBooksService],
})
export class CashBooksModule {}
