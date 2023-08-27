import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SpecialistsModule } from './specialists/specialists.module';
import { TransactionsModule } from './transactions/transactions.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    SpecialistsModule,
    TransactionsModule,
    PrismaModule,
  ],
})
export class AppModule {}
