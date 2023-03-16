import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { swaggerConfig } from './config/swagger.config';
import { SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  try {
    const app: INestApplication = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);

    app.enableCors();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        transform: true,
        transformOptions: {
          enableImplicitConversion: true,
        },
      }),
    );
    SwaggerModule.setup(
      'api',
      app,
      SwaggerModule.createDocument(app, swaggerConfig),
    );
    await app.listen(configService.get<number>('PORT') || 5000);
  } catch (error) {
    console.error(error);
  }
}
bootstrap();
