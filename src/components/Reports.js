import React from 'react';
import { Bar } from 'react-chartjs-2';

const Reports = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Spending Pattern',
        data: [300, 500, 200, 700, 400],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h1>Financial Reports</h1>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Reports;