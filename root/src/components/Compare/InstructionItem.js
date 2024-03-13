// InstructionItem.js
import React from "react";

// CSS
import "./InstructionItem.css";

// Bootstrap compoments
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Custom compoments

const InstructionItem = () => {
  return (
    <div className="ingredientBody container">
      <div className="row">
        <div className="col-6">
          <h6 style={{ marginTop: "15px" }}>XXXXXXXXXX</h6>
          <h5 style={{ marginTop: "-8px" }}>
            <strong>XXXXXXXXXX</strong>
          </h5>
          <h5 style={{ marginTop: "-9px" }}>XXXXXXXXXX</h5>
        </div>
        <div className="col-6 ">
          <div className="ingredientItemPhoto"></div>
        </div>
      </div>
    </div>
  );
};

export default InstructionItem;
