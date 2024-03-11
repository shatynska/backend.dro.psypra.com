import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PAGE_SECTIONS_QUERIES } from '../../application/queries';
import { PageSectionsPersistenceModule } from '../persistence/page-sections-persistence.module';
import { PAGE_SECTIONS_CONTROLLERS } from './controllers';

@Module({
  imports: [CqrsModule, PageSectionsPersistenceModule],
  controllers: [...PAGE_SECTIONS_CONTROLLERS],
  providers: [...PAGE_SECTIONS_QUERIES],
})
export class PageSectionsHttpModule {}
