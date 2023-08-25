import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SpecialistsModule } from './specialists/specialists.module';

@Module({
  imports: [UsersModule, SpecialistsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
