import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { DimensionsModule } from './dimensions/dimensions.module';
import { CONTROLLERS as DIMENSIONS_CONTROLLERS } from './dimensions/infrastructure/http/controllers';
import { CONTROLLERS as PAGE_SECTIONS_CONTROLLERS } from './page-sections/infrastructure/http/controllers';
import { PageSectionsModule } from './page-sections/page-sections.module';
import { CONTROLLERS as SPECIALISTS_CONTROLLERS } from './specialists/infrastructure/http/controllers';
import { SpecialistsModule } from './specialists/specialists.module';

@Module({
  imports: [
    CqrsModule,
    PageSectionsModule,
    SpecialistsModule,
    DimensionsModule,
  ],
  controllers: [
    ...PAGE_SECTIONS_CONTROLLERS,
    ...DIMENSIONS_CONTROLLERS,
    ...SPECIALISTS_CONTROLLERS,
  ],
})
export class WebsiteContentModule {}
