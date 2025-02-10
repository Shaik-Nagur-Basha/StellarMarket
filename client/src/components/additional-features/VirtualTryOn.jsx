// components/VirtualTryOn.js
import React, { useState } from 'react';

function VirtualTryOn() {
  const [selectedColor, setSelectedColor] = useState('red');
  const colors = ['red', 'blue', 'green', 'black'];

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-10 px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Virtual Try‑On</h1>
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-6 flex flex-col items-center">
        <div className="w-full h-96 bg-gray-300 flex items-center justify-center rounded-lg mb-4">
          {/* Simulated try‑on view displaying the chosen color */}
          <span className="text-2xl font-bold">Try‑On: {selectedColor}</span>
        </div>
        <div className="flex space-x-4">
          {colors.map(color => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-10 h-10 rounded-full border-2 ${selectedColor === color ? 'border-blue-500' : 'border-gray-300'}`}
              style={{ backgroundColor: color }}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VirtualTryOn;
