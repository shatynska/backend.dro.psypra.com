import { Module } from '@nestjs/common';
import { QUERIES } from './application/queries';
import { READ_REPOSITORY_TOKEN } from './application/read.repository';
import { PrismaReadRepository } from './infrastructure/persistence/prisma/read.repository';

@Module({
  providers: [
    {
      provide: READ_REPOSITORY_TOKEN,
      useClass: PrismaReadRepository,
    },
    ...QUERIES,
  ],

  exports: [...QUERIES],
})
export class DimensionsModule {}
