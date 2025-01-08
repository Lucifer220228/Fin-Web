import React, { useState, useEffect } from 'react';
import OrderForm from '../components/OrderForm';
import OrderList from '../components/OrderList';
import { getOrders, createOrder, updateOrder, deleteOrder, Order } from '../services/orderService';

const OrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [editingOrder, setEditingOrder] = useState<any | null>(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const data = await getOrders();
    setOrders(data);
  };

  const handleCreateOrUpdateOrder = async (order: any) => {
    if (editingOrder) {
      await updateOrder(editingOrder.id, order);
    } else {
      await createOrder(order);
    }
    setEditingOrder(null);
    fetchOrders();
  };

  const handleDeleteOrder = async (id: string) => {
    await deleteOrder(id);
    fetchOrders();
  };

  return (
    <div>
      <h1>訂單管理</h1>
      <OrderForm initialData={editingOrder} onSubmit={handleCreateOrUpdateOrder} />
      <OrderList
        orders={orders}
        onEdit={(id) => setEditingOrder(orders.find((o) => o.id === id))}
        onDelete={handleDeleteOrder}
      />
    </div>
  );
};

export default OrdersPage;
