import { Module } from '@nestjs/common';

import { CASH_BOOKS_READ_REPOSITORY_TOKEN } from '~/cash-books/application/cash-books.read.repository';
import { CASH_BOOKS_WRITE_REPOSITORY_TOKEN } from '~/cash-books/domain/cash-books.write.repository';
import { PrismaCashBooksReadRepository } from './prisma/cash-books.read.repository';
import { PrismaCashBooksWriteRepository } from './prisma/cash-books.write.repository';

@Module({
  providers: [
    {
      provide: CASH_BOOKS_READ_REPOSITORY_TOKEN,
      useClass: PrismaCashBooksReadRepository,
    },
    {
      provide: CASH_BOOKS_WRITE_REPOSITORY_TOKEN,
      useClass: PrismaCashBooksWriteRepository,
    },
  ],
  exports: [
    CASH_BOOKS_READ_REPOSITORY_TOKEN,
    CASH_BOOKS_WRITE_REPOSITORY_TOKEN,
  ],
})
export class PersistenceModule {}
