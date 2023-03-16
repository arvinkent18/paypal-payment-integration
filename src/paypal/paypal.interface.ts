interface Item {
  name: string;
  description: string;
  quantity: string;
  unit_amount: {
    currency_code: string;
    value: string;
  };
}

interface Breakdown {
  item_total: {
    currency_code: string;
    value: string;
  };
}

interface Amount {
  currency_code: string;
  value: string;
  breakdown: Breakdown;
}

export interface PurchaseUnit {
  items: Item[];
  amount: Amount;
}

export interface ApplicationContext {
  return_url: string;
  cancel_url: string;
}

export interface PaypalOrderResponse {
  id: string;
  status: string;
  links: {
    href: string;
    rel: string;
    method: string;
  }[];
}

export interface PayPalAuthResponse {
  scope: string;
  access_token: string;
  token_type: string;
  app_id: string;
  expires_in: number;
  supported_authn_schemes: string[];
  nonce: string;
  client_metadata: {
    name: string;
    display_name: string;
    logo_uri: string;
    scopes: string[];
    ui_type: string;
  };
}




