// components/RealTimeDemandForecast.js
import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';

function RealTimeDemandForecast() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const forecastChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Now', '1h', '2h', '3h', '4h', '5h'],
        datasets: [{
          label: 'Forecasted Demand',
          data: [100, 120, 140, 130, 150, 160], // Dummy forecast data
          fill: false,
          borderColor: 'rgba(255, 159, 64, 0.7)',
          tension: 0.1
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Real-Time Demand Forecast'
          }
        },
        responsive: true,
      }
    });

    const interval = setInterval(() => {
      forecastChart.data.datasets[0].data = forecastChart.data.datasets[0].data.map(val => val + Math.floor(Math.random() * 10 - 5));
      forecastChart.update();
    }, 15000);

    return () => {
      clearInterval(interval);
      forecastChart.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-10 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-xl p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Demand Forecast Dashboard</h1>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}

export default RealTimeDemandForecast;
