import React from "react";
import {
  FiDollarSign,
  FiShoppingBag,
  FiUsers,
  FiBarChart2,
} from "react-icons/fi";

const StatCard = ({ title, value, percentage, icon: Icon, color }) => (
  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
          {value}
        </h3>
        <p
          className={`text-sm mt-2 ${
            percentage >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {percentage >= 0 ? "+" : ""}
          {percentage}%
        </p>
      </div>
      <div className={`p-3 rounded-full ${color}`}>
        <Icon className="text-white text-xl" />
      </div>
    </div>
  </div>
);

export default function Stats() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$54,230",
      percentage: 12.5,
      icon: FiDollarSign,
      color: "bg-blue-500",
    },
    {
      title: "Total Orders",
      value: "1,240",
      percentage: 8.2,
      icon: FiShoppingBag,
      color: "bg-purple-500",
    },
    {
      title: "Active Customers",
      value: "3,427",
      percentage: -2.4,
      icon: FiUsers,
      color: "bg-orange-500",
    },
    {
      title: "Conversion Rate",
      value: "2.4%",
      percentage: 4.7,
      icon: FiBarChart2,
      color: "bg-green-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}
