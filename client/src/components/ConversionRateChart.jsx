// components/ConversionRateChart.js
import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';

function ConversionRateChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const conversionChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
          label: 'Conversion Rate (%)',
          data: [5, 7, 6, 8],
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Weekly Conversion Rate'
          }
        },
        responsive: true,
      }
    });

    return () => {
      conversionChart.destroy();
    };
  }, []);

  return (
    <div className="bg-white rounded-lg shadow p-4 my-4">
      <canvas ref={chartRef} />
    </div>
  );
}

export default ConversionRateChart;
