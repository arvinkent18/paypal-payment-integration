import { CreateOrderDto } from './dto/create-order.dto';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { PayPalAuthResponse, PaypalOrderResponse } from './paypal.interface';

@Injectable()
export class PaypalService {
  private readonly base: string;

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {
    this.base = configService.get<string>('PAYPAL_BASE');
  }

  /**
   * Create a Paypal order.
   *
   * @param {CreateOrderDto} createOrderDto - The data needed to create the order
   * @returns {Promise<PaypalOrderResponse>} The created order object
   */
  async createOrder(
    createOrderDto: CreateOrderDto,
  ): Promise<PaypalOrderResponse> {
    const accessToken = await this.generateAccessToken();
    const url = `${this.base}/v2/checkout/orders`;
    const { intent, purchase_units, application_context } = createOrderDto;
    const { data } = await firstValueFrom(
      this.httpService.post<PaypalOrderResponse>(
        url,
        {
          intent,
          purchase_units,
          application_context,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        },
      ),
    );

    return data;
  }
  /**
   * Generates access token using PayPal client ID and secret from environment variables.
   *
   * @returns {Promise<string>} Access Token
   */
  private async generateAccessToken(): Promise<string> {
    const clientId: string = this.configService.get<string>('PAYPAL_CLIENT_ID');
    const clientSecret: string = this.configService.get<string>(
      'PAYPAL_CLIENT_SECRET',
    );
    const auth: string = Buffer.from(`${clientId}:${clientSecret}`).toString(
      'base64',
    );
    const request = this.httpService.post<PayPalAuthResponse>(
      `${this.base}/v1/oauth2/token`,
      'grant_type=client_credentials',
      {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      },
    );
    const {
      data: { access_token },
    } = await firstValueFrom(request);

    return access_token;
  }
}
