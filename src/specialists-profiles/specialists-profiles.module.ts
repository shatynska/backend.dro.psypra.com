import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CONTACTS_CONTROLLERS, ContactsModule } from './contacts';
import { CORE_CONTROLLERS, CoreModule } from './core';

@Module({
  imports: [CqrsModule, CoreModule, ContactsModule],
  controllers: [...CORE_CONTROLLERS, ...CONTACTS_CONTROLLERS],
})
export class SpecialistsProfilesModule {}
