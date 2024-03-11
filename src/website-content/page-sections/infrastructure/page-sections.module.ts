import { Module } from '@nestjs/common';
import { PageSectionsHttpModule } from './http/page-sections-http.module';

@Module({
  imports: [PageSectionsHttpModule],
})
export class PageSectionsModule {}
