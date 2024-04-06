// ingredientItem.js
import React from "react";

// CSS
import "./ingredientItem.css";

// Bootstrap compoments
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Custom compoments

const IngredientItem = ({ index, ingredient }) => {
  const no = index + 1;
  const name = ingredient.name;
  const amount = ingredient.amount;
  const unit = ingredient.unit;
  const photoUrl =
    "https://spoonacular.com/cdn/ingredients_100x100/" + ingredient.image;

  return (
    <div className="ingredientBody container">
      <div className="row">
        <div className="col-6">
          <h6 style={{ marginTop: "15px" }}>no. {no}</h6>
          <h5 style={{ marginTop: "-8px" }}>
            <strong>{name}</strong>
          </h5>
          <h5 style={{ marginTop: "-9px" }}>
            {amount} {unit}
          </h5>
        </div>
        <div className="col-6 ">
          <div className="ingredientPhotoFrame">
            <div
              className="ingredientItemPhoto"
              style={{ backgroundImage: `url(${photoUrl})` }}
            ></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="ingredientItemBoxShadowOverlay"></div>
      </div>
    </div>
  );
};

export default IngredientItem;
