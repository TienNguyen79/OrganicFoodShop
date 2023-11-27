import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Legend, //chú giải tên biểu đồ
  Tooltip //ToolTip (chú thích công cụ) là một cửa sổ hiển thị thông tin chi tiết khi bạn di chuột qua các điểm, dòng hoặc phần tử khác trên biểu đồ
);

const ChartExample = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "Jun"],
    datasets: [
      {
        label: "Total Sales of the month",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        data: [65, 59, 80, 81, 56, 79],
      },
    ],
  };

  const options = {
    plugin: {
      legend: true,
    },
    scales: {
      x: {
        type: "category",
        labels: ["January", "February", "March", "April", "May", "Jun"],
      },

      y: {
        type: "linear",
        position: "left",
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default ChartExample;
