import { Module } from '@nestjs/common';
import { CONTROLLERS as READ_CONTROLLERS } from './read/infrastructure/http/controllers';
import { ReadModule } from './read/read.module';
import { CONTROLLERS as WRITE_CONTROLLERS } from './write/infrastructure/http/controllers';
import { WriteModule } from './write/write.module';

@Module({
  imports: [ReadModule, WriteModule],
  controllers: [...READ_CONTROLLERS, ...WRITE_CONTROLLERS],
})
export class ProfilesModule {}
