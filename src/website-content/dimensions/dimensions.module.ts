import { Module } from '@nestjs/common';
import { QUERIES } from './application/queries';
import { PersistenceModule } from './infrastructure/persistence.module';

@Module({
  imports: [PersistenceModule],
  providers: [...QUERIES],

  exports: [...QUERIES],
})
export class DimensionsModule {}
