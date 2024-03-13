// lineChart.js
import React from "react";

// CSS

// Chats.js
import "chart.js/auto";
import { Line } from "react-chartjs-2";

// Bootstrap compoments
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Custom compoments

const lineCharts = () => {
  const data = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Stock Prices",
        data: [120, 130, 125, 140, 135, 150],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        lineTension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
  };
  return (
    <div>
      <p>Line Chart</p>
      <Line data={data} options={options} />
    </div>
  );
};

export default lineCharts;
