// components/RealTimeUserActivityDashboard.js
import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js";

export default function RealTimeUserActivityDashboard() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const activityChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["10:00", "10:05", "10:10", "10:15", "10:20", "10:25"],
        datasets: [
          {
            label: "Active Users",
            data: [120, 135, 150, 145, 160, 155],
            fill: false,
            borderColor: "rgba(54, 162, 235, 0.6)",
            tension: 0.1,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Real-Time User Activity",
          },
        },
        responsive: true,
      },
    });

    // Simulate real-time updates every 10 seconds
    const interval = setInterval(() => {
      // Append new time and random user count
      const now = new Date();
      const timeLabel = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      activityChart.data.labels.push(timeLabel);
      activityChart.data.datasets[0].data.push(
        140 + Math.floor(Math.random() * 30)
      );
      // Keep last 6 entries
      if (activityChart.data.labels.length > 6) {
        activityChart.data.labels.shift();
        activityChart.data.datasets[0].data.shift();
      }
      activityChart.update();
    }, 10000);

    return () => {
      clearInterval(interval);
      activityChart.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Real-Time User Activity Dashboard
        </h1>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}

//RealTimeUserActivityDashboard;
