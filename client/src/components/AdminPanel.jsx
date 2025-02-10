// components/AdminPanel.js
import React, { useState } from 'react';

function AdminPanel() {
  const [activeTab, setActiveTab] = useState('products');
  const dummyProducts = [
    { id: 1, name: 'Product 1', price: 49.99 },
    { id: 2, name: 'Product 2', price: 39.99 },
  ];
  const dummyOrders = [
    { id: 101, customer: 'John Doe', total: 89.98 },
    { id: 102, customer: 'Jane Smith', total: 49.99 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-10">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6">
        <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
        <div className="mb-6">
          <button
            className={`px-4 py-2 mr-2 ${activeTab === 'products' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded`}
            onClick={() => setActiveTab('products')}
          >
            Products
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'orders' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded`}
            onClick={() => setActiveTab('orders')}
          >
            Orders
          </button>
        </div>
        {activeTab === 'products' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Manage Products</h2>
            <ul>
              {dummyProducts.map((product) => (
                <li key={product.id} className="flex justify-between items-center border-b py-2">
                  <span>{product.name}</span>
                  <span>${product.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {activeTab === 'orders' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Manage Orders</h2>
            <ul>
              {dummyOrders.map((order) => (
                <li key={order.id} className="flex justify-between items-center border-b py-2">
                  <span>Order #{order.id} - {order.customer}</span>
                  <span>${order.total.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPanel;
