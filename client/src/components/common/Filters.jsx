// components/Filters.js
import React, { useState } from 'react';

function Filters({ onFilterChange, onSortChange }) {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    onFilterChange(e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
    onSortChange(e.target.value);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
      <input 
        type="text" 
        placeholder="Search products..." 
        value={filter} 
        onChange={handleFilterChange} 
        className="w-full sm:w-1/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select 
        value={sort} 
        onChange={handleSortChange} 
        className="w-full sm:w-1/4 p-2 mt-4 sm:mt-0 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Sort By</option>
        <option value="priceLowHigh">Price: Low to High</option>
        <option value="priceHighLow">Price: High to Low</option>
      </select>
    </div>
  );
}

export default Filters;
