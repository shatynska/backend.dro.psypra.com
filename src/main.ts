import { ErrorDto } from '@common/dto';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import helmet from 'helmet';
import { patchNestJsSwagger } from 'nestjs-zod';
import { AppModule } from './app.module';
import { AuthModule } from './auth/auth.module';
import { OrganizationBookkeepingModule } from './organization-bookkeeping/organization-bookkeeping.module';
import { SpecialistsProfilesModule } from './specialists-profiles/specialists-profiles.module';
import { UsersModule } from './users/users.module';
import { WebsiteContentModule } from './website-content/website-content.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  app.use(helmet());
  app.use(cookieParser());

  patchNestJsSwagger();

  const organizationBookkeepingOptions = new DocumentBuilder()
    .setTitle('DroPsyPra bookkeeping')
    .setDescription('The DroPsyPra bookkeeping API description')
    .setVersion('0.0.1')
    .addTag('bookkeeping')
    .addBearerAuth()
    .build();
  const organizationBookkeepingDocument = SwaggerModule.createDocument(
    app,
    organizationBookkeepingOptions,
    {
      include: [OrganizationBookkeepingModule, UsersModule, AuthModule],
      extraModels: [ErrorDto],
    },
  );
  SwaggerModule.setup('api/bookkeeping', app, organizationBookkeepingDocument);

  const websiteContentOptions = new DocumentBuilder()
    .setTitle('DroPsyPra website content')
    .setDescription('The DroPsyPra website content API description')
    .setVersion('0.0.1')
    .addTag('pages')
    .build();
  const websiteContentDocument = SwaggerModule.createDocument(
    app,
    websiteContentOptions,
    { include: [WebsiteContentModule], extraModels: [ErrorDto] },
  );
  SwaggerModule.setup('api', app, websiteContentDocument);

  const specialistsProfilesOptions = new DocumentBuilder()
    .setTitle('DroPsyPra specialists profiles')
    .setDescription('The DroPsyPra specialists profiles API description')
    .setVersion('0.0.1')
    .addTag('profiles')
    .addBearerAuth()
    .build();
  const specialistsProfilesDocument = SwaggerModule.createDocument(
    app,
    specialistsProfilesOptions,
    {
      include: [UsersModule, AuthModule, SpecialistsProfilesModule],
      extraModels: [ErrorDto],
    },
  );
  SwaggerModule.setup('api/profiles', app, specialistsProfilesDocument);

  const config = await app.get(ConfigService);
  const port = config.get<number>('API_PORT');
  await app.listen(port || 3000);
}
bootstrap();
