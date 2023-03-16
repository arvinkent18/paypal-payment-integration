import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Paypal API')
  .setDescription('API for Paypal Integration with Nest.js')
  .setVersion('1.0')
  .build();