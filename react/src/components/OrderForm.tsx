import React, { useState } from 'react';

interface OrderFormProps {
  initialData?: Order;
  onSubmit: (order: OrderInput) => void;
}

interface OrderInput {
  customerName: string;
  items: { productId: string; quantity: number }[];
  totalAmount: number;
  status: string;
}

interface Order {
  id: string;
  customerName: string;
  items: { productId: string; quantity: number }[];
  totalAmount: number;
  orderDate: string;
  status: string;
}

const OrderForm: React.FC<OrderFormProps> = ({ initialData, onSubmit }) => {
  const [customerName, setCustomerName] = useState(initialData?.customerName || '');
  const [items, setItems] = useState(initialData?.items || [{ productId: '', quantity: 1 }]);
  const [totalAmount, setTotalAmount] = useState(initialData?.totalAmount || 0);
  const [status, setStatus] = useState(initialData?.status || 'pending');

  const handleItemChange = (index: number, field: string, value: string | number) => {
    const updatedItems = [...items];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    setItems(updatedItems);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ customerName, items, totalAmount, status });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>客戶姓名：</label>
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>訂單項目：</label>
        {items.map((item, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="商品 ID"
              value={item.productId}
              onChange={(e) => handleItemChange(index, 'productId', e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="數量"
              value={item.quantity}
              onChange={(e) => handleItemChange(index, 'quantity', Number(e.target.value))}
              required
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() => setItems([...items, { productId: '', quantity: 1 }])}
        >
          添加項目
        </button>
      </div>
      <div>
        <label>總金額：</label>
        <input
          type="number"
          value={totalAmount}
          onChange={(e) => setTotalAmount(Number(e.target.value))}
          required
        />
      </div>
      <div>
        <label>狀態：</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="pending">未處理</option>
          <option value="processed">處理中</option>
          <option value="shipped">已出貨</option>
          <option value="delivered">已送達</option>
        </select>
      </div>
      <button type="submit">提交</button>
    </form>
  );
};

export default OrderForm;
