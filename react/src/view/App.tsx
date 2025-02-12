import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import OrdersPage from '../pages/OrdersPage';

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <Link to="/">首頁</Link> | <Link to="/orders">訂單管理</Link>
      </nav>
      <Routes>
        {/* 首頁 */}
        <Route path="/" element={<HomePage />} />

        {/* 訂單管理頁 */}
        <Route path="/orders" element={<OrdersPage />} />

        {/* 404 頁面 */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
