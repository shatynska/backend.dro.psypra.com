import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  const config = await app.get(ConfigService);
  const port = config.get<number>('API_PORT');
  await app.listen(port || 3000);
  app.use(cookieParser());
}
bootstrap();
