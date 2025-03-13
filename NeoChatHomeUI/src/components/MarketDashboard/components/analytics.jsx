import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Analytics() {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [3000, 4500, 3800, 5200, 4800, 6000],
        borderColor: "#8B5CF6",
        backgroundColor: "#8B5CF6",
        tension: 0.4,
      },
      {
        label: "Orders",
        data: [20, 32, 28, 40, 35, 48],
        borderColor: "#60A5FA",
        backgroundColor: "#60A5FA",
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "rgb(156, 163, 175)",
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "rgb(156, 163, 175)",
        },
      },
      y: {
        grid: {
          color: "rgba(156, 163, 175, 0.1)",
        },
        ticks: {
          color: "rgb(156, 163, 175)",
        },
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
  };

  return (
    <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Analytics Overview
        </h3>
        <select className="text-sm bg-transparent border border-gray-200 dark:border-slate-600 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 3 months</option>
        </select>
      </div>

      <div className="space-y-6">
        <div className="h-[200px] w-full">
          <Line data={chartData} options={chartOptions} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10 dark:from-purple-500/5 dark:to-blue-500/5">
            <p className="text-sm text-gray-500 dark:text-gray-400">Revenue</p>
            <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">
              $12,345
            </p>
            <div className="flex items-center mt-2">
              <svg
                className="w-4 h-4 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              <span className="text-sm text-green-500 ml-1">+15.3%</span>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10 dark:from-purple-500/5 dark:to-blue-500/5">
            <p className="text-sm text-gray-500 dark:text-gray-400">Orders</p>
            <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">
              284
            </p>
            <div className="flex items-center mt-2">
              <svg
                className="w-4 h-4 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              <span className="text-sm text-green-500 ml-1">+8.2%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
