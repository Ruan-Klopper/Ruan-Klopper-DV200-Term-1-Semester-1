// pieChart.js
import React from "react";

// CSS

// Chats.js
import "chart.js/auto";
import { Pie } from "react-chartjs-2";

// Bootstrap compoments
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Custom compoments

const pieCharts = () => {
  const data = {
    labels: ["Direct", "Organic Search", "Referral", "Social Media"],
    datasets: [
      {
        label: "Traffic Sources",
        data: [30, 25, 20, 25],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <p>Pie chart</p>
      <Pie data={data} />
    </div>
  );
};

export default pieCharts;
