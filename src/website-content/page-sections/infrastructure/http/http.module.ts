import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { QUERIES } from '../../application/queries';
import { PersistenceModule } from '../persistence/persistence.module';
import { CONTROLLERS } from './controllers';

@Module({
  imports: [CqrsModule, PersistenceModule],
  controllers: [...CONTROLLERS],
  providers: [...QUERIES],
})
export class HttpModule {}
