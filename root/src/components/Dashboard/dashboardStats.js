// dashboardStats.js
import React from "react";

// CSS
import "./dashboardStats.css";

// Bootstrap compoments
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Custom compoments

const DashboardStats = ({ chart }) => {
  return <div class="dashStatsBox">{chart}</div>;
};

export default DashboardStats;
