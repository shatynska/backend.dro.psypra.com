import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { COMMANDS } from './application/commands';
import { PROFILES_WRITE_REPOSITORY_TOKEN } from './domain/repository';
import { CONTROLLERS } from './infrastructure/http/controllers';
import { PrismaRepository } from './infrastructure/persistence/prisma/prisma.repository';

@Module({
  imports: [CqrsModule],
  controllers: [...CONTROLLERS],
  providers: [
    ...COMMANDS,
    {
      provide: PROFILES_WRITE_REPOSITORY_TOKEN,
      useClass: PrismaRepository,
    },
  ],
})
export class WriteModule {}
