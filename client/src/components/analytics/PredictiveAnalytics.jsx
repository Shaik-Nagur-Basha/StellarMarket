// components/PredictiveAnalytics.js
import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js";

export default function PredictiveAnalytics() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const predictiveChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Now", "Next Week", "2 Weeks", "3 Weeks", "Next Month"],
        datasets: [
          {
            label: "Predicted Sales",
            data: [120, 135, 150, 160, 180],
            fill: false,
            borderColor: "rgba(153, 102, 255, 0.6)",
            tension: 0.1,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Sales Prediction",
          },
        },
        responsive: true,
      },
    });
    return () => {
      predictiveChart.destroy();
    };
  }, []);

  return (
    <div className="bg-white rounded-lg shadow p-4 my-4">
      <canvas ref={chartRef} />
    </div>
  );
}

//PredictiveAnalytics;
