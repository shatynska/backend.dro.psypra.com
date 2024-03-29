import { Module } from '@nestjs/common';
import { DimensionsModule } from '../dimensions/dimensions.module';
import { SectionHeadersModule } from '../section-headers/section-headers.module';
import { SpecialistsModule } from '../specialists/specialists.module';
import { HttpModule } from './infrastructure/http/http.module';

@Module({
  imports: [
    HttpModule,
    SectionHeadersModule,
    DimensionsModule,
    SpecialistsModule,
  ],
})
export class PageSectionsModule {}
