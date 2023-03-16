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

export interface PostOrderResponse {
  id: string;
  status: string;
  links: {
    href: string;
    rel: string;
    method: string;
  }[];
}




