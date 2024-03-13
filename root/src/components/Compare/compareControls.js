// compareControls.js
import React, { useState } from "react";

// CSS
import "./compareControls.css";

// Bootstrap compoments
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Custom compoments
import CompareCard from "./compareCards";

const CompareControls = () => {
  const [compareCards, setCompareCards] = useState([]);

  const handleAddCompareCard = () => {
    if (compareCards.length < 3) {
      setCompareCards([
        ...compareCards,
        <CompareCard key={compareCards.length} />,
      ]);
    }
  };

  const handleRemoveAllCompareCards = () => {
    setCompareCards([]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="controlBody">
            <h5 style={{ color: "#F2D249", marginBottom: "0px" }}>
              Add more recipes to this page
            </h5>
            <h5 style={{ color: "#F2D249", marginBottom: "5px" }}>
              Max: 3, Used: {compareCards.length}/3
            </h5>
            <div className="input-group-append" style={{ marginLeft: "-10px" }}>
              <button
                className="btn btnYellow"
                type="button"
                id="addCompareCard"
                style={{ marginLeft: "8px" }}
                onClick={handleAddCompareCard}
              >
                Add
              </button>
              <button
                className="btn btnRed"
                type="button"
                id="removeAllCompareCard"
                style={{ marginLeft: "8px" }}
                onClick={handleRemoveAllCompareCards}
              >
                Close all
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center" id="compareCardContainer">
        {compareCards.map((compareCard, index) => (
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4" key={index}>
            {compareCard}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompareControls;
