import { Module } from '@nestjs/common';
import { PaypalModule } from './paypal/paypal.module';
import { AppConfigModule } from './config/app.config.module';

@Module({
  imports: [
    AppConfigModule,
    PaypalModule, 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
