import express from 'express';
import {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} from '../controllers/orderController';

const router = express.Router();

console.log('初始化 orderRoutes');

router.get('/', (req, res, next) => {
  console.log('進入 GET /api/orders 路由');
  next();
}, getOrders);

router.get('/:id', (req, res, next) => {
  console.log(`進入 GET /api/orders/:id 路由，參數 id: ${req.params.id}`);
  next();
}, getOrderById);

router.post('/', createOrder);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);

export default router;
