import { Module } from '@nestjs/common';
import { PAGE_SECTIONS_READ_REPOSITORY_TOKEN } from '../../application/page-sections.read.repository';
import { PrismaPageSectionsReadRepository } from './prisma/page-sections.read.repository';

@Module({
  providers: [
    {
      provide: PAGE_SECTIONS_READ_REPOSITORY_TOKEN,
      useClass: PrismaPageSectionsReadRepository,
    },
  ],
  exports: [PAGE_SECTIONS_READ_REPOSITORY_TOKEN],
})
export class PageSectionsPersistenceModule {}
