// components/SalesPerformanceDashboard.js
import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js";

export default function SalesPerformanceDashboard() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const salesChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Sales",
            data: [120, 150, 180, 200, 220, 250],
            fill: false,
            borderColor: "rgba(255, 159, 64, 0.6)",
            tension: 0.1,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Sales Performance Over Time",
          },
        },
        responsive: true,
      },
    });

    // Simulate live data updates every 10 seconds
    const interval = setInterval(() => {
      salesChart.data.datasets[0].data = salesChart.data.datasets[0].data.map(
        (value) => value + Math.floor(Math.random() * 10)
      );
      salesChart.update();
    }, 10000);

    return () => {
      clearInterval(interval);
      salesChart.destroy();
    };
  }, []);

  return (
    <div className="bg-white rounded-lg shadow p-4 my-4">
      <canvas ref={chartRef} />
    </div>
  );
}

//SalesPerformanceDashboard;
