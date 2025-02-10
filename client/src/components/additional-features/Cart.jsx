// components/Cart.js
import React, { useState } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 49.99,
      quantity: 1,
      image: "https://picsum.photos/seed/product1/200/200",
    },
    {
      id: 2,
      name: "Product 2",
      price: 39.99,
      quantity: 2,
      image: "https://picsum.photos/seed/product2/200/200",
    },
  ]);

  const getTotal = () => {
    return cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-10">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div>
            <ul>
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between border-b py-4"
                >
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded mr-4"
                    />
                    <div>
                      <h2 className="text-xl font-semibold">{item.name}</h2>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <div className="text-lg font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-right">
              <span className="text-xl font-bold">Total: ${getTotal()}</span>
            </div>
            <button className="mt-4 w-full bg-green-500 hover:bg-green-700 text-white py-3 rounded transition duration-300">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

//Cart;
