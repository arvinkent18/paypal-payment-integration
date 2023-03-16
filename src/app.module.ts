import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaypalModule } from './paypal/paypal.module';
import { AppConfigModule } from './config/app.config.module';

@Module({
  imports: [
    AppConfigModule,
    PaypalModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
