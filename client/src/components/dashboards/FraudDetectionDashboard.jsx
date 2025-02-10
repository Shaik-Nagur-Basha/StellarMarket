// components/FraudDetectionDashboard.js
import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';

function FraudDetectionDashboard() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const fraudChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Legitimate', 'Fraudulent'],
        datasets: [{
          data: [90, 10], // Dummy data: 90% legitimate, 10% fraudulent
          backgroundColor: [
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 99, 132, 0.7)'
          ]
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Fraud Detection Overview'
          }
        },
        responsive: true,
      }
    });

    return () => {
      fraudChart.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-10 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Fraud Detection Dashboard</h1>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}

export default FraudDetectionDashboard;
