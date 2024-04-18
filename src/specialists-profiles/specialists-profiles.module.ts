import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CoreModule } from './core/core.module';
import { CONTROLLERS as CORE_CONTROLLERS } from './core/infrastructure/http/controllers';

@Module({
  imports: [CqrsModule, CoreModule],
  controllers: [...CORE_CONTROLLERS],
})
export class SpecialistsProfilesModule {}
