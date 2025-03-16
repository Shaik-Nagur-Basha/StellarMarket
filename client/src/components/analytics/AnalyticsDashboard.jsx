// components/AnalyticsDashboard.js
import React, { useState, useEffect } from "react";

const generateDummyData = async () => {
  const { faker } = await import("@faker-js/faker");
  return {
    totalSales: faker.number.int({ min: 50000, max: 150000 }),
    orders: faker.number.int({ min: 500, max: 2000 }),
    customers: faker.number.int({ min: 1000, max: 5000 }),
    averageOrderValue: faker.number.float({
      min: 50,
      max: 200,
      precision: 0.01,
    }),
    monthlyData: Array.from({ length: 12 }, () => ({
      sales: faker.number.int({ min: 5000, max: 15000 }),
      orders: faker.number.int({ min: 50, max: 200 }),
      visitors: faker.number.int({ min: 1000, max: 5000 }),
    })),
    topProducts: Array.from({ length: 5 }, () => ({
      name: faker.commerce.productName(),
      sales: faker.number.int({ min: 100, max: 1000 }),
      revenue: faker.number.float({ min: 1000, max: 10000, precision: 0.01 }),
      image: faker.image.urlPicsumPhotos({ width: 64, height: 64 }),
    })),
  };
};

export default function AnalyticsDashboard() {
  const [data, setData] = useState(null);
  const [selectedMetric, setSelectedMetric] = useState("sales");
  const [timeframe, setTimeframe] = useState("monthly");

  useEffect(() => {
    generateDummyData().then(setData);
  }, []);

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const getMaxValue = () => {
    return Math.max(...data.monthlyData.map((item) => item[selectedMetric]));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
            Analytics Dashboard
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Real-time insights into your business performance
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              label: "Total Sales",
              value: `$${data.totalSales.toLocaleString()}`,
              icon: "💰",
            },
            {
              label: "Orders",
              value: data.orders.toLocaleString(),
              icon: "📦",
            },
            {
              label: "Customers",
              value: data.customers.toLocaleString(),
              icon: "👥",
            },
            {
              label: "Avg. Order Value",
              value: `$${data.averageOrderValue.toFixed(2)}`,
              icon: "📈",
            },
          ].map((metric, index) => (
            <div
              key={index}
              className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl p-6 shadow-glass hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{metric.icon}</span>
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  vs last month
                  <span className="ml-1 text-green-500">+12.5%</span>
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
                {metric.value}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Chart Controls */}
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-2">
            {["sales", "orders", "visitors"].map((metric) => (
              <button
                key={metric}
                onClick={() => setSelectedMetric(metric)}
                className={`
                  px-4 py-2 rounded-lg capitalize transition-all duration-300
                  ${
                    selectedMetric === metric
                      ? "bg-primary-500 text-white"
                      : "bg-white/20 dark:bg-gray-800/20 text-gray-700 dark:text-gray-300"
                  }
                `}
              >
                {metric}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            {["weekly", "monthly", "yearly"].map((period) => (
              <button
                key={period}
                onClick={() => setTimeframe(period)}
                className={`
                  px-4 py-2 rounded-lg capitalize transition-all duration-300
                  ${
                    timeframe === period
                      ? "bg-primary-500 text-white"
                      : "bg-white/20 dark:bg-gray-800/20 text-gray-700 dark:text-gray-300"
                  }
                `}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        {/* Chart */}
        <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl p-6 shadow-glass">
          <div className="h-64 flex items-end justify-between gap-2">
            {data.monthlyData.map((month, index) => {
              const percentage = (month[selectedMetric] / getMaxValue()) * 100;
              return (
                <div key={index} className="relative flex-1 group">
                  <div
                    className="absolute bottom-0 w-full bg-primary-500/20 rounded-t-lg transition-all duration-500 ease-out group-hover:bg-primary-500/40"
                    style={{ height: `${percentage}%` }}
                  >
                    <div
                      className="absolute bottom-0 w-full bg-primary-500 rounded-t-lg transition-all duration-500"
                      style={{ height: `${percentage * 0.7}%` }}
                    />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 dark:text-gray-400">
                    {months[index]}
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap transition-opacity duration-200">
                    {selectedMetric === "sales" ? "$" : ""}
                    {month[selectedMetric].toLocaleString()}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Top Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl p-6 shadow-glass">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Top Performing Products
            </h3>
            <div className="space-y-4">
              {data.topProducts.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/10 transition-colors"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {product.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {product.sales} sales
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900 dark:text-white">
                      ${product.revenue.toLocaleString()}
                    </div>
                    <div className="text-xs text-green-500">+15%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Metrics */}
          <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl p-6 shadow-glass">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Performance Metrics
            </h3>
            <div className="space-y-6">
              {[
                { label: "Conversion Rate", value: "3.2%", trend: "+0.8%" },
                {
                  label: "Avg. Session Duration",
                  value: "4m 32s",
                  trend: "+12%",
                },
                { label: "Bounce Rate", value: "42.3%", trend: "-2.1%" },
                { label: "Pages per Session", value: "3.8", trend: "+0.4" },
              ].map((metric, index) => (
                <div key={index} className="relative pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {metric.label}
                    </span>
                    <div className="text-right">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {metric.value}
                      </span>
                      <span
                        className={`ml-2 text-xs ${
                          metric.trend.startsWith("+")
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {metric.trend}
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      style={{
                        width: `${faker.number.int({ min: 30, max: 90 })}%`,
                      }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
