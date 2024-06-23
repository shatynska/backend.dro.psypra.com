import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import {
  COMMANDS_REPOSITORY_TOKEN,
  GetCoreHandler,
  GetFirstNameHandler,
  GetIsPublicHandler,
  GetLastNameHandler,
  QUERIES_REPOSITORY_TOKEN,
  UpdateFirstNameHandler,
  UpdateIsPublicHandler,
  UpdateLastNameHandler,
} from './application';
import {
  GetCoreController,
  GetFirstNameController,
  GetIsPublicController,
  GetLastNameController,
  PrismaCommandsRepository,
  PrismaQueriesRepository,
  UpdateFirstNameController,
  UpdateIsPublicController,
  UpdateLastNameController,
} from './infrastructure';

export const CONTROLLERS = [
  GetCoreController,
  GetFirstNameController,
  GetLastNameController,
  GetIsPublicController,
  UpdateFirstNameController,
  UpdateIsPublicController,
  UpdateLastNameController,
];

@Module({
  imports: [CqrsModule],
  controllers: [...CONTROLLERS],
  providers: [
    GetCoreHandler,
    GetFirstNameHandler,
    GetLastNameHandler,
    GetIsPublicHandler,
    UpdateFirstNameHandler,
    UpdateIsPublicHandler,
    UpdateLastNameHandler,
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
export class CoreModule {}
