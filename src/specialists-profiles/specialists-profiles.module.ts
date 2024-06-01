import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CORE_CONTROLLERS, CoreModule } from './core';

@Module({
  imports: [CqrsModule, CoreModule],
  controllers: [...CORE_CONTROLLERS],
})
export class SpecialistsProfilesModule {}
