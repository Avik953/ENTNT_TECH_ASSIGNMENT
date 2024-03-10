import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './assets/store';  // Import the Redux store
import Dashboard from './components/Dashboard.jsx';
import Products from './components/Products.jsx';
import Orders from './components/Orders.jsx';
import Navbar from './components/Navbar.jsx';
import OrdersCalendarView from './components/OrdersCalendarView.jsx'

function App() {
  return (
    <Provider store={store}>  
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/calendarview" element={<OrdersCalendarView />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
