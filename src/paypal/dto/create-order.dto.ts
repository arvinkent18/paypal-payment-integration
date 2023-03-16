
import { IsNotEmpty, IsString } from 'class-validator';
import { PurchaseUnit, ApplicationContext } from '../paypal.interface';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  intent: string;

  @ApiProperty()
  @IsNotEmpty()
  purchase_units: PurchaseUnit;

  @ApiProperty()
  @IsNotEmpty()
  application_context: ApplicationContext;
}