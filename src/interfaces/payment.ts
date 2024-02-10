export interface Payment {
  amount?: number;
  productName?: string,
  reference?: string;
  payment_method_type?: string;
  currency?: string;
  status?: PaymentStatus;
  card?: Card;
}
export interface Card {
  number: number;
  name: string;
  expiry: number;
  cvc: number;
}

export type PaymentStatus = "approved" | "denied" | "initial";



/*
// Generated by https://quicktype.io

export interface Payment {
  ok: boolean;
  msg: string;
  payment: PaymentClass;
}

export interface PaymentClass {
  id: string;
  created_at: string;
  finalized_at: null;
  amount_in_cents: number;
  reference: string;
  customer_email: string;
  currency: string;
  payment_method_type: string;
  payment_method: PaymentMethod;
  status: string;
  status_message: null;
  billing_data: null;
  shipping_address: null;
  redirect_url: null;
  payment_source_id: number;
  payment_link_id: null;
  customer_data: null;
  bill_id: null;
  taxes: any[];
  tip_in_cents: null;
}

export interface PaymentMethod {
  type: string;
  extra: Extra;
  installments: number;
}

export interface Extra {
  bin: string;
  name: string;
  brand: string;
  exp_year: string;
  card_type: string;
  exp_month: string;
  last_four: string;
  card_holder: string;
  is_three_ds: boolean;
  unique_code: null;
}

/*
{
    "ok": true,
    "msg": "transaction completed successfully",
    "payment": {
        "id": "192349-1707504467-91213",
        "created_at": "2024-02-09T18:47:47.613Z",
        "finalized_at": null,
        "amount_in_cents": 950000,
        "reference": "sk8-hajh-k-eyc1-2100-xmxm392-sn2m",
        "customer_email": "gusta0019@gmail.com",
        "currency": "COP",
        "payment_method_type": "CARD",
        "payment_method": {
            "type": "CARD",
            "extra": {
                "bin": "424242",
                "name": "VISA-4242",
                "brand": "VISA",
                "exp_year": "28",
                "card_type": "CREDIT",
                "exp_month": "08",
                "last_four": "4242",
                "card_holder": "Gustavo Santos",
                "is_three_ds": false,
                "unique_code": null
            },
            "installments": 1
        },
        "status": "PENDING",
        "status_message": null,
        "billing_data": null,
        "shipping_address": null,
        "redirect_url": null,
        "payment_source_id": 98619,
        "payment_link_id": null,
        "customer_data": null,
        "bill_id": null,
        "taxes": [],
        "tip_in_cents": null
    }
}


*/