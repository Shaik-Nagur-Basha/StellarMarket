// components/AdvancedUserFeedbackAnalyzer.js
import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';

function AdvancedUserFeedbackAnalyzer() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const feedbackChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Product Quality', 'Customer Service', 'Delivery', 'Pricing'],
        datasets: [{
          label: 'Feedback Count',
          data: [40, 25, 30, 15], // Dummy feedback counts
          backgroundColor: [
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)',
            'rgba(255, 159, 64, 0.7)',
            'rgba(255, 99, 132, 0.7)'
          ]
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'User Feedback Analysis'
          }
        },
        responsive: true,
      }
    });

    return () => {
      feedbackChart.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-10 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-xl p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">User Feedback Analyzer</h1>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}

export default AdvancedUserFeedbackAnalyzer;
