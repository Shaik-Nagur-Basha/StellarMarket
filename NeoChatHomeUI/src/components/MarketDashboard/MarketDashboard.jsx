import React from "react";
import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import ProductsSection from "./components/products";
import Cart from "./components/cart";
import Analytics from "./components/analytics";
import AdminPanel from "./components/adminPanel";

export default function MarketDashboard() {
  const [darkMode, setDarkMode] = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
      />

      <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Dashboard title="Market Overview" className="mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <ProductsSection />
          </div>

          <div className="lg:col-span-4 space-y-6">
            <Cart />
            <Analytics />
          </div>
        </div>

        <AdminPanel className="mt-8" />
      </main>
    </div>
  );
}
