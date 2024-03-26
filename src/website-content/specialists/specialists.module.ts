import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { DimensionsModule } from '~/dimensions/dimensions.module';
import { QUERIES } from './application/queries';
import { PersistenceModule } from './infrastructure/persistence/persistence.module';

@Module({
  imports: [CqrsModule, PersistenceModule, DimensionsModule],
  providers: [...QUERIES],
  exports: [...QUERIES],
})
export class SpecialistsModule {}
