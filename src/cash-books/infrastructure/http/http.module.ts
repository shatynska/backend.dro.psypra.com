import { Module } from '@nestjs/common';
import { CashBooksService } from '../../application/cash-books.service';
import { CashBooksController } from './controllers/cash-books.controller';

@Module({
  controllers: [CashBooksController],
  providers: [CashBooksService],
})
export class HttpModule {}
