import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import {
  AddPhoneHandler,
  COMMANDS_REPOSITORY_TOKEN,
  GetContactsHandler,
  QUERIES_REPOSITORY_TOKEN,
} from './application';
import {
  AddPhoneController,
  GetContactsController,
  PrismaCommandsRepository,
  PrismaQueriesRepository,
} from './infrastructure';

export const CONTROLLERS = [AddPhoneController, GetContactsController];

@Module({
  imports: [CqrsModule],
  controllers: [...CONTROLLERS],
  providers: [
    GetContactsHandler,
    AddPhoneHandler,
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
