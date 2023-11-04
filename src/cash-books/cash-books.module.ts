import { Module } from '@nestjs/common';
import { CashBooksController } from './cash-books.controller';

@Module({
  imports: [],
  controllers: [CashBooksController],
  providers: [],
})
export class CashBooksModule {}
