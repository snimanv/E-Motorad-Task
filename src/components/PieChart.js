// src/components/PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, ArcElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components
ChartJS.register(CategoryScale, ArcElement, Title, Tooltip, Legend);

const PieChart = ({ data }) => {
  // Assuming 'data' is passed as a prop, here's a basic example:
  const chartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green'],
    datasets: [
      {
        data: [12, 19, 3, 5],
        backgroundColor: ['red', 'blue', 'yellow', 'green'],
        borderColor: ['black', 'black', 'black', 'black'],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default PieChart;