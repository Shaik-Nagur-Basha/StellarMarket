// components/InteractiveUserSegmentationFilters.js
import React, { useState, useEffect, useRef } from "react";
import { Chart } from "chart.js";

export default function InteractiveUserSegmentationFilters() {
  const chartRef = useRef(null);
  const [filter, setFilter] = useState("purchaseFrequency");

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    let data;
    if (filter === "purchaseFrequency") {
      data = [50, 30, 20];
    } else if (filter === "geography") {
      data = [40, 35, 25];
    } else if (filter === "ageGroup") {
      data = [60, 20, 20];
    }
    const segmentationChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Segment A", "Segment B", "Segment C"],
        datasets: [
          {
            data: data,
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
            text: `User Segmentation (${filter})`,
          },
        },
        responsive: true,
      },
    });
    return () => {
      segmentationChart.destroy();
    };
  }, [filter]);

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-10 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Interactive User Segmentation
        </h1>
        <div className="mb-4">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="purchaseFrequency">Purchase Frequency</option>
            <option value="geography">Geography</option>
            <option value="ageGroup">Age Group</option>
          </select>
        </div>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}

//InteractiveUserSegmentationFilters;
