import { Module } from '@nestjs/common';
import { PaypalService } from './paypal.service';
import { PaypalController } from './paypal.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        timeout: configService.get<number>('HTTP_TIMEOUT') || 5000,
        maxRedirects: configService.get<number>('HTTP_MAX_REDIRECTS') || 5,
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    PaypalService,
    ConfigService,
  ],
  controllers: [PaypalController],
  exports: [PaypalService],
})
export class PaypalModule {}
