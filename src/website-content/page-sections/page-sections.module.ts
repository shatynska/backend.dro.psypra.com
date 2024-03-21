import { Module } from '@nestjs/common';
import { DimensionsModule } from '../dimensions/dimensions.module';
import { SpecialistsModule } from '../specialists/specialists.module';
import { HttpModule } from './infrastructure/http/http.module';

@Module({
  imports: [HttpModule, DimensionsModule, SpecialistsModule],
})
export class PageSectionsModule {}
