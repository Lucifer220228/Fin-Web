import mongoose, { Schema, Document } from 'mongoose';

export interface IOrder extends Document {
  customerName: string;
  items: { productId: string; quantity: number }[];
  totalAmount: number;
  status: string;
  orderDate: Date;
}

const OrderSchema: Schema = new Schema({
  customerName: { type: String, required: true },
  items: [
    {
      productId: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number, required: true },
  status: { type: String, default: 'Pending' },
  orderDate: { type: Date, default: Date.now },
});

export default mongoose.model<IOrder>('orderlist', OrderSchema);
