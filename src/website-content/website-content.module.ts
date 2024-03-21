import { Module } from '@nestjs/common';
import { PageSectionsModule } from './page-sections/page-sections.module';

@Module({
  imports: [PageSectionsModule],
})
export class WebsiteContentModule {}
