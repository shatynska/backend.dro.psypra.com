import { Module } from '@nestjs/common';
import { QUERIES } from './application/queries';
import { PROFILES_READ_REPOSITORY_TOKEN } from './application/repository';
import { CONTROLLERS } from './infrastructure/http/controllers';
import { PrismaRepository } from './infrastructure/persistence/prisma/prisma.repository';

@Module({
  controllers: [...CONTROLLERS],
  providers: [
    ...QUERIES,
    {
      provide: PROFILES_READ_REPOSITORY_TOKEN,
      useClass: PrismaRepository,
    },
  ],
})
export class ReadModule {}
