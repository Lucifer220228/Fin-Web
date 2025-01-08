import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrdersPage from '../pages/OrdersPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OrdersPage />} />
      </Routes>
    </Router>
  );
};

export default App;
