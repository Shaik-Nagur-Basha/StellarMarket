// components/UserSegmentationDashboard.js
import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js";

export default function UserSegmentationDashboard() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const segmentationChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Frequent Buyers", "Occasional Buyers", "New Customers"],
        datasets: [
          {
            data: [50, 30, 20],
            backgroundColor: [
              "rgba(75, 192, 192, 0.6)",
              "rgba(255, 205, 86, 0.6)",
              "rgba(255, 99, 132, 0.6)",
            ],
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "User Segmentation",
          },
        },
        responsive: true,
      },
    });
    return () => {
      segmentationChart.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-10 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          User Segmentation Dashboard
        </h1>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}

//UserSegmentationDashboard;
