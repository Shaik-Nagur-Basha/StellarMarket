// components/UserSessionsChart.js
import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';

function UserSessionsChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const sessionsChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
          label: 'User Sessions',
          data: [150, 200, 180, 220, 250, 300, 280],
          fill: false,
          borderColor: 'rgba(255, 99, 132, 0.6)',
          tension: 0.1
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Daily User Sessions'
          }
        },
        responsive: true,
      }
    });

    return () => {
      sessionsChart.destroy();
    };
  }, []);

  return (
    <div className="bg-white rounded-lg shadow p-4 my-4">
      <canvas ref={chartRef} />
    </div>
  );
}

export default UserSessionsChart;
