// components/InventoryManagement.js
import React, { useState } from "react";

const dummyInventory = [
  { id: 1, name: "Product 1", quantity: 50 },
  { id: 2, name: "Product 2", quantity: 30 },
  { id: 3, name: "Product 3", quantity: 20 },
];

export default function InventoryManagement() {
  const [inventory, setInventory] = useState(dummyInventory);

  const updateQuantity = (id, newQuantity) => {
    setInventory(
      inventory.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Inventory Management
      </h1>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Product</th>
              <th className="px-4 py-2 border">Quantity</th>
              <th className="px-4 py-2 border">Update</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-2 border">{item.name}</td>
                <td className="px-4 py-2 border">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                    className="w-20 p-1 border border-gray-300 rounded"
                  />
                </td>
                <td className="px-4 py-2 border">
                  <button className="bg-green-500 hover:bg-green-700 text-white px-3 py-1 rounded">
                    Save
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

//InventoryManagement;
