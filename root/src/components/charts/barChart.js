// barChart.js
import React from "react";

// CSS

// Chats.js
import "chart.js/auto";
import { Bar } from "react-chartjs-2";

// Bootstrap compoments
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Custom compoments

const BarCharts = () => {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Monthly Sales",
        data: [
          1000, 1500, 2000, 1800, 2500, 3000, 3500, 3200, 2800, 2000, 1500,
          1200,
        ],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div>
      <p>Bar Chart</p>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarCharts;
