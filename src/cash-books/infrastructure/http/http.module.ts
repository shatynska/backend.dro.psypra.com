import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { COMMANDS } from '~/cash-books/application/commands';
import { QUERIES } from '~/cash-books/application/queries';
import { PersistenceModule } from '../persistence/persistence.module';
import { CONTROLLERS } from './controllers';

@Module({
  imports: [CqrsModule, PersistenceModule],
  controllers: [...CONTROLLERS],
  providers: [...COMMANDS, ...QUERIES],
})
export class HttpModule {}
