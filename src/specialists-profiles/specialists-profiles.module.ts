import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { CONTROLLERS as CORE_CONTROLLERS } from './core/infrastructure/http/controllers';

@Module({
  imports: [CoreModule],
  controllers: [...CORE_CONTROLLERS],
})
export class SpecialistsProfilesModule {}
