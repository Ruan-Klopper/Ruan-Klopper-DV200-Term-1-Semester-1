// ingredientItem.js
import React from "react";

// CSS
import "./ingredientItem.css";

// Bootstrap compoments
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Custom compoments

const IngredientItem = ({ ingredient }) => {
  const { no, name, amount, photoUrl } = ingredient;

  return (
    <div className="ingredientBody container">
      <div className="row">
        <div className="col-6">
          <h6 style={{ marginTop: "15px" }}>no. {no}</h6>
          <h5 style={{ marginTop: "-8px" }}>
            <strong>{name}</strong>
          </h5>
          <h5 style={{ marginTop: "-9px" }}>{amount}</h5>
        </div>
        <div className="col-6 ">
          <div className="ingredientItemPhoto">
            <p>{photoUrl}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientItem;
