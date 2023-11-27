import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  ArcElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  ArcElement,
  Legend,
  Tooltip
);
const PieChart = () => {
  const data = {
    labels: ["Category1", "Category2", "Category3", "Category4"],
    datasets: [
      {
        data: [12, 19, 3, 5],
        backgroundColor: ["red", "blue", "yellow", "green", "purple", "orange"],
      },
    ],
  };

  const options = {};

  return <Pie data={data} options={options} />;
};

export default PieChart;
