import { Module } from '@nestjs/common';
import { CONTROLLERS as SPECIALIST_CONTROLLERS } from './specialist/infrastructure/http/controllers';
import { SpecialistModule } from './specialist/specialist.module';

@Module({
  imports: [SpecialistModule],
  controllers: [...SPECIALIST_CONTROLLERS],
})
export class SpecialistsProfilesModule {}
