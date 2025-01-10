import { Request, Response } from 'express';
import Order from '../models/modelOrder';

// 創建訂單
export const createOrder = async (req: Request, res: Response) => {
  try {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create order', error });
  }
};

// 獲取所有訂單
export const getOrders = async (req: Request, res: Response) => {
  console.log('調用了 getOrders 控制器');
  try {
    const orders = await Order.find();
    console.log('獲取到的訂單資料：', orders);
    res.status(200).json(orders);
  } catch (error) {
    console.error('getOrders 錯誤：', error);
    res.status(500).json({ message: 'Failed to fetch orders', error });
  }
};

// 獲取單個訂單
export const getOrderById = async (req: Request, res: Response) => {
  console.log(`調用了 getOrderById 控制器，id: ${req.params.id}`);
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      console.log('未找到訂單');
      return res.status(404).json({ message: 'Order not found' });
    }
    console.log('找到的訂單：', order);
    res.status(200).json(order);
  } catch (error) {
    console.error('getOrderById 錯誤：', error);
    res.status(500).json({ message: 'Failed to fetch order', error });
  }
};

// 更新訂單
export const updateOrder = async (req: Request, res: Response) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update order', error });
  }
};

// 刪除訂單
export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete order', error });
  }
};
