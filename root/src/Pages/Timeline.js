// Dashboard.js
import React from "react";

// CSS
import "../css/global.css";
import "../css/Compare.css";

// Bootstrap compoments
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Custom compoments
import NavBar from "../components/navbar";

const Timeline = () => {
  return (
    <div class="website">
      <NavBar webPage={"Timeline"} />
      <h1>This is the timeline page</h1>
    </div>
  );
};

export default Timeline;
