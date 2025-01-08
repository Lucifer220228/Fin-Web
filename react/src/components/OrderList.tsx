import React from 'react';

interface Order {
  id: string;
  customerName: string;
  totalAmount: number;
  status: string;
}

interface OrderListProps {
  orders: Order[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const OrderList: React.FC<OrderListProps> = ({ orders, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>客戶姓名</th>
          <th>總金額</th>
          <th>狀態</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td>{order.customerName}</td>
            <td>{order.totalAmount}</td>
            <td>{order.status}</td>
            <td>
              <button onClick={() => onEdit(order.id)}>編輯</button>
              <button onClick={() => onDelete(order.id)}>刪除</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderList;
