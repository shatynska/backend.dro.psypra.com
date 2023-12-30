import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.use(cookieParser());

  const swaggerConfig = new DocumentBuilder()
    .setTitle('DroPsyPra')
    .setDescription('The DroPsyPra API description')
    .setVersion('0.0.1')
    .addTag('users')
    .addBearerAuth()
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/swagger', app, swaggerDocument);

  const config = await app.get(ConfigService);
  const port = config.get<number>('API_PORT');
  await app.listen(port || 3000);
}
bootstrap();
