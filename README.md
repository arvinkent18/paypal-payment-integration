# NestJS PayPal API

This is a sample NestJS API that integrates with PayPal's API. With this API, you can make payments, refunds, and get payment details.

## Installation

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Copy the `.env.example` file to `.env` and fill in the required environment variables.
4. Start the server: `npm start:dev`.

## Usage

The API provides the following endpoints:

### POST /paypal/orders
Create a new order.

Request body:
```json
{
    "intent": "CAPTURE",
    "purchase_units": [
        {
            "items": [
                {
                    "name": "T-Shirt",
                    "description": "Green XL",
                    "quantity": "1",
                    "unit_amount": {
                        "currency_code": "USD",
                        "value": "1.00"
                    }
                }
            ],
            "amount": {
                "currency_code": "USD",
                "value": "1.00",
                "breakdown": {
                    "item_total": {
                        "currency_code": "USD",
                        "value": "1.00"
                    }
                }
            }
        }
    ],
    "application_context": {
        "return_url": "https://example.com/return",
        "cancel_url": "https://example.com/cancel"
    }
}
```

### Author

Arvin Kent Lazaga
- Email: arvinkent121816@gmail.com
- LinkedIn: https://www.linkedin.com/in/arvin-kent-lazaga-895783a8/