export interface OrderInput {
    customerName: string;
    items: { productId: string; quantity: number }[];
    totalAmount: number;
    status: string;
  }