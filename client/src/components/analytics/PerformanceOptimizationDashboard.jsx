// components/PerformanceOptimizationDashboard.js
import React, { useEffect, useRef } from "react";
import { Chart, BarElement, CategoryScale, LinearScale, BarController } from "chart.js";

// Register the necessary components
Chart.register(BarElement, CategoryScale, LinearScale, BarController);


export default function PerformanceOptimizationDashboard() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const performanceChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["FCP (ms)", "LCP (ms)", "CLS", "FID (ms)"],
        datasets: [
          {
            label: "Web Vitals Metrics",
            data: [1200, 2500, 0.1, 50], // Dummy data values
            backgroundColor: [
              "rgba(75, 192, 192, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(255, 99, 132, 0.6)",
            ],
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Performance Optimization Metrics",
          },
        },
        responsive: true,
      },
    });
    return () => {
      performanceChart.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-10 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-xl p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Performance Optimization Dashboard
        </h1>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}
