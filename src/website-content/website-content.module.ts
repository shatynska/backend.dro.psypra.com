import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { DimensionsModule } from './dimensions/dimensions.module';
import { CONTROLLERS as PAGE_SECTIONS_CONTROLLERS } from './page-sections/infrastructure/http/controllers';
import { PageSectionsModule } from './page-sections/page-sections.module';
import { SpecialistsModule } from './specialists/specialists.module';

@Module({
  imports: [
    CqrsModule,
    PageSectionsModule,
    SpecialistsModule,
    DimensionsModule,
  ],
  controllers: [...PAGE_SECTIONS_CONTROLLERS],
})
export class WebsiteContentModule {}
