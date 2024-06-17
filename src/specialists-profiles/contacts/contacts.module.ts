import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import {
  AddContactHandler,
  COMMANDS_REPOSITORY_TOKEN,
  GetContactsHandler,
  QUERIES_REPOSITORY_TOKEN,
  RemoveContactHandler,
} from './application';
import {
  AddEmailController,
  AddPhoneController,
  AddWebsiteController,
  GetContactsController,
  PrismaCommandsRepository,
  PrismaQueriesRepository,
  RemoveContactController,
} from './infrastructure';

export const CONTROLLERS = [
  RemoveContactController,
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
    RemoveContactHandler,
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
