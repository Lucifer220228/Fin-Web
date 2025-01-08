import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/orders';

export interface OrderInput {
  customerName: string;
  items: { productId: string; quantity: number }[];
  totalAmount: number;
  status: string;
}

export interface Order {
  id: string;
  customerName: string;
  items: { productId: string; quantity: number }[];
  totalAmount: number;
  orderDate: string;
  status: string;
}

// 獲取所有訂單
export const getOrders = async (): Promise<Order[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

// 新增訂單
export const createOrder = async (order: OrderInput): Promise<Order> => {
  try {
    const response = await axios.post(API_URL, order);
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

// 更新訂單
export const updateOrder = async (id: string, order: OrderInput): Promise<Order> => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, order);
    return response.data;
  } catch (error) {
    console.error('Error updating order:', error);
    throw error;
  }
};

// 刪除訂單
export const deleteOrder = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting order:', error);
    throw error;
  }
};
