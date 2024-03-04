// Dashboard.js
import React from "react";

// CSS
import "../css/global.css";

// Bootstrap compoments
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Custom compoments
import NavBar from "../components/navbar";

const errorPage = () => {
  return (
    <div>
      <NavBar />

      <Container>
        <h1>The page unfortunely went out to buy milk</h1>
      </Container>
    </div>
  );
};

export default errorPage;
