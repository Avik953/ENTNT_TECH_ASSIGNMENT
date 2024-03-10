import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';


const Dashboard = () => {
  const products = useSelector(state => state.products);
  const orders = useSelector(state => state.orders);
  const [productCount, setProductCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {
    
    setProductCount(products.length);
    setOrderCount(orders.length);
  }, [products, orders]);

  const recentSales = [
    { id: 1, product: 'Product X', quantity: 2, price: 100, date: new Date(2024, 2, 7) },
    { id: 2, product: 'Product Y', quantity: 1, price: 50, date: new Date(2024, 2, 6) },
  ];

  return (
    <div className="main-content">
      <h2>Welcome to your ERP System! Here's a quick overview:</h2>
      <ol>
        <li>Total Products: {productCount}</li>
        <li>Pending Orders: {orderCount}</li>
        <li>Recent Sales:</li>
        {recentSales.length > 0 ? (
          <ol>
            {recentSales.map(sale => (
              <li key={sale.id}>
                {sale.product} (Qty: {sale.quantity}) - ${sale.price * sale.quantity} ({sale.date.toLocaleDateString()})
              </li>
            ))}
          </ol>
        ) : (
          <p>No recent sales data available.</p>
        )}
      </ol>
    </div>
  );
}

export default Dashboard;
