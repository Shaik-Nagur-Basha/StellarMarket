// components/Products.js
import React, { useState } from "react";
import ProductCard from "../common/ProductCard";
import Filters from "../common/Filters";

const initialProducts = [
  { id: 1, name: "Product 1", price: 49.99, image: "/product1.jpg" },
  { id: 2, name: "Product 2", price: 39.99, image: "/product2.jpg" },
  { id: 3, name: "Product 3", price: 59.99, image: "/product3.jpg" },
  { id: 4, name: "Product 4", price: 29.99, image: "/product4.jpg" },
  // Extend with more products as needed...
];

function Products() {
  const [products] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);

  const handleFilterChange = (searchTerm) => {
    const term = searchTerm.toLowerCase();
    const filtered = products.filter((p) =>
      p.name.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
  };

  const handleSortChange = (sortOption) => {
    let sortedProducts = [...filteredProducts];
    if (sortOption === "priceLowHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceHighLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(sortedProducts);
  };

  return (
    <section id="products" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        <Filters
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
