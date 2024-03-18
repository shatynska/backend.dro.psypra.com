import { Module } from '@nestjs/common';
import { READ_REPOSITORY_TOKEN } from '../../application/read.repository';
import { PrismaReadRepository } from './prisma/read.repository';

@Module({
  providers: [
    {
      provide: READ_REPOSITORY_TOKEN,
      useClass: PrismaReadRepository,
    },
  ],
  exports: [READ_REPOSITORY_TOKEN],
})
export class PersistenceModule {}
