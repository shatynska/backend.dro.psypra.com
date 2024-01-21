import { Module } from '@nestjs/common';
import { HttpModule } from './http/http.module';
import { PersistenceModule } from './persistence/persistence.module';

@Module({
  imports: [HttpModule, PersistenceModule],
})
export class CashBooksModule {}
