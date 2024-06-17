import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import {
  AddContactHandler,
  COMMANDS_REPOSITORY_TOKEN,
  GetContactsHandler,
  QUERIES_REPOSITORY_TOKEN,
} from './application';
import {
  AddEmailController,
  AddPhoneController,
  AddWebsiteController,
  GetContactsController,
  PrismaCommandsRepository,
  PrismaQueriesRepository,
} from './infrastructure';

export const CONTROLLERS = [
  AddPhoneController,
  AddEmailController,
  AddWebsiteController,
  GetContactsController,
];

@Module({
  imports: [CqrsModule],
  controllers: [...CONTROLLERS],
  providers: [
    GetContactsHandler,
    AddContactHandler,
    {
      provide: QUERIES_REPOSITORY_TOKEN,
      useClass: PrismaQueriesRepository,
    },
    {
      provide: COMMANDS_REPOSITORY_TOKEN,
      useClass: PrismaCommandsRepository,
    },
  ],
})
export class ContactsModule {}
