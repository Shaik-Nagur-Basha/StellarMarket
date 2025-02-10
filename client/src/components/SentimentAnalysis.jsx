// components/SentimentAnalysis.js
import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';

function SentimentAnalysis() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const sentimentChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Positive', 'Neutral', 'Negative'],
        datasets: [{
          data: [60, 25, 15],
          backgroundColor: [
            'rgba(75, 192, 192, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ]
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'User Sentiment Analysis'
          }
        },
        responsive: true,
      }
    });
    return () => {
      sentimentChart.destroy();
    };
  }, []);

  return (
    <div className="bg-white rounded-lg shadow p-4 my-4">
      <canvas ref={chartRef} />
    </div>
  );
}

export default SentimentAnalysis;
