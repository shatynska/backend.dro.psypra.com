import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import {
  AddPhoneHandler,
  COMMANDS_REPOSITORY_TOKEN,
  GetAllHandler,
  QUERIES_REPOSITORY_TOKEN,
} from './application';
import {
  AddPhoneController,
  GetAllController,
  PrismaCommandsRepository,
  PrismaQueriesRepository,
} from './infrastructure';

export const CONTROLLERS = [AddPhoneController, GetAllController];

@Module({
  imports: [CqrsModule],
  controllers: [...CONTROLLERS],
  providers: [
    GetAllHandler,
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
