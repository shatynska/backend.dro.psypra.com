import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import helmet from 'helmet';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';
import { HttpModule } from '~/cash-books/infrastructure/http/http.module';
import { PageSectionsHttpModule } from '~/page-sections/infrastructure/http/page-sections-http.module';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.use(cookieParser());

  const organizationBookkeepingOptions = new DocumentBuilder()
    .setTitle('DroPsyPra book-keeping')
    .setDescription('The DroPsyPra book-keeping API description')
    .setVersion('0.0.1')
    .addTag('book-keeping')
    .addBearerAuth()
    .build();
  const organizationBookkeepingDocument = SwaggerModule.createDocument(
    app,
    organizationBookkeepingOptions,
    { include: [HttpModule, UsersModule, AuthModule] },
  );
  SwaggerModule.setup('api/book-keeping', app, organizationBookkeepingDocument);

  const websiteContentOptions = new DocumentBuilder()
    .setTitle('DroPsyPra website content')
    .setDescription('The DroPsyPra website content API description')
    .setVersion('0.0.1')
    .addTag('pages')
    .build();
  const websiteContentDocument = SwaggerModule.createDocument(
    app,
    websiteContentOptions,
    {
      include: [PageSectionsHttpModule],
    },
  );
  SwaggerModule.setup('api', app, websiteContentDocument);

  const config = await app.get(ConfigService);
  const port = config.get<number>('API_PORT');
  await app.listen(port || 3000);
}
bootstrap();
