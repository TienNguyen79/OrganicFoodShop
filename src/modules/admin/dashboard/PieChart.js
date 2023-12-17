import React, { useEffect, useState } from "react";
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
const PieChart = ({ result }) => {
  const [nameCate, setNameCate] = useState([]);
  const [QuantityInCate, setQuantityInCate] = useState([]);

  useEffect(() => {
    if (result?.products_in_category) {
      const keys = Object.keys(result?.products_in_category);
      setNameCate(keys);
    }
    if (result?.products_in_category) {
      const values = Object.values(result?.products_in_category);
      setQuantityInCate(values);
    }
  }, [result?.products_in_category]);

  const data = {
    labels: nameCate,
    datasets: [
      {
        data: QuantityInCate,
        backgroundColor: [
          "#FF5733",
          "#3498DB",
          "#F1C40F",
          "#2ECC71",
          "#9B59B6",
          "#F39C12",
          "#1ABC9C",
          "#D35400",
          "#8E44AD",
          "#27AE60",
          "#2980B9",
          "#C0392B",
        ],
      },
    ],
  };

  const options = {};

  return <Pie data={data} options={options} />;
};

export default PieChart;
