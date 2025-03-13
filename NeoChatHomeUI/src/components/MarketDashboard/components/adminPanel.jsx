import React from "react";

export default function AdminPanel({ className }) {
  return (
    <div className={`p-6 ${className}`}>
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
        Admin Controls
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <button className="p-4 text-left bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h4 className="font-medium text-blue-600 dark:text-blue-400">
            Manage Products
          </h4>
          <p className="text-sm text-blue-600/70 dark:text-blue-400/70">
            Add, edit, or remove products
          </p>
        </button>
        <button className="p-4 text-left bg-green-50 dark:bg-green-900/20 rounded-lg">
          <h4 className="font-medium text-green-600 dark:text-green-400">
            Orders
          </h4>
          <p className="text-sm text-green-600/70 dark:text-green-400/70">
            View and manage orders
          </p>
        </button>
        <button className="p-4 text-left bg-purple-50 dark:bg-purple-900/20 rounded-lg">
          <h4 className="font-medium text-purple-600 dark:text-purple-400">
            Users
          </h4>
          <p className="text-sm text-purple-600/70 dark:text-purple-400/70">
            Manage user accounts
          </p>
        </button>
        <button className="p-4 text-left bg-orange-50 dark:bg-orange-900/20 rounded-lg">
          <h4 className="font-medium text-orange-600 dark:text-orange-400">
            Settings
          </h4>
          <p className="text-sm text-orange-600/70 dark:text-orange-400/70">
            Configure store settings
          </p>
        </button>
      </div>
    </div>
  );
}
