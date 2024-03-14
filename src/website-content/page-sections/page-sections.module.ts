import { Module } from '@nestjs/common';
import { PageSectionsHttpModule } from './infrastructure/http/page-sections-http.module';

@Module({
  imports: [PageSectionsHttpModule],
})
export class PageSectionsModule {}
