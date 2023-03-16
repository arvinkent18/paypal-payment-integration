import {
  Body,
  Controller,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { PaypalService } from './paypal.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { ERR_DEFAULT_MESSAGE } from 'src/constants';
import { PaypalOrderResponse } from './paypal.interface';

@ApiTags('paypal')
@Controller('paypal')
export class PaypalController {
  constructor(private readonly paypalService: PaypalService) {}

   /**
   * Create a Paypal order.
   *
   * @param {CreateOrderDto} createOrderDto - The data needed to create the order.
   * @throws {InternalServerErrorException} - If unexpected internal error occurred.
   * @returns {Promise<PaypalOrderResponse>} The created order object.
   */
  @ApiBody({ type: CreateOrderDto })
  @Post('order')
  async createOrder(@Body() createOrderDto: CreateOrderDto): Promise<PaypalOrderResponse> {
    try {
      const order = this.paypalService.createOrder(createOrderDto);

      return order;
    } catch (error) {
      throw new InternalServerErrorException(ERR_DEFAULT_MESSAGE);
    }
  }
}
