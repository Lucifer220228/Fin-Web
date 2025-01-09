export interface Order {
    id: string;
    customerName: string;
    items: { productId: string; quantity: number }[];
    totalAmount: number;
    orderDate: string;
    status: string;
  }