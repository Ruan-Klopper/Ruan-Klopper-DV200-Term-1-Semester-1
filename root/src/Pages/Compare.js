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

import CompareControls from "../components/Compare/compareControls";

const Compare = () => {
  return (
    <div class="website">
      <div className="compBgElem"></div>
      <div style={{ marginBottom: "80px" }}></div>
      <NavBar webPage={"Compare"} />
      <div className="container">
        {/* Title */}
        <div className="row">
          <div className="compareTopTitle">
            <div className="compLine"></div>
            <div className="compLineTitle">
              <h1>Compare</h1>
            </div>
          </div>
        </div>

        {/* Compare cards */}
        <div className="row">
          <CompareControls />
        </div>
      </div>
    </div>
  );
};

export default Compare;
