// compareRecipeDetails.js
import React, { useState, useEffect } from "react";
import axios from "axios";

// CSS
import "./compareCard.css";
import "../../css/global.css";

// Bootstrap compoments
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Custom compoments
import IngredientItem from "./ingredientItem";
import InstructionItem from "./InstructionItem";

const RecipeDetails = ({ id }) => {
  const {
    healthScore,
    servings,
    pricePerServing,
    extendedIngredients,
    analyzedInstructions,
  } = id;

  return (
    <div className="recipeDetails">
      {/* Recipe deep information - will appear when a user clicks the view button */}
      {/* Recipe description */}
      <div className="row">
        <p style={{ marginBottom: "10px" }}>Detailed information:</p>
      </div>

      {/* Score gummies */}
      <div className="row" style={{ margin: "-1px", marginTop: "8px" }}>
        <div
          className="scoreGummy col-4"
          style={{ backgroundColor: "#F2D249", color: "#E27209" }}
        >
          <p style={{ marginBottom: "2px" }}>Health score</p>
          <h1 id="healthScoreNo">{healthScore}</h1>
        </div>

        <div
          className="scoreGummy col-4"
          style={{ backgroundColor: "#E27209", color: "#F2D249" }}
        >
          <p style={{ marginBottom: "2px" }}>Servings</p>
          <h1 id="servingsNo">{servings}</h1>
        </div>

        <div
          className="scoreGummy col-4"
          style={{ backgroundColor: "#B42828", color: "#F2D249" }}
        >
          <p style={{ marginBottom: "2px" }}>Price per serving</p>
          <h4 id="pricePerServingNo">{pricePerServing}</h4>
        </div>
      </div>

      {/* Taste and nutrition graphs */}
      <div className="row" style={{ marginTop: "30px", textAlign: "center" }}>
        <div className="col-6">
          <h4>Taste</h4>
          {/* pieGraph component still to be coded */}
        </div>
        <div className="col-6">
          <h4>Nutrition</h4>
          {/* nutrition component still to be coded */}
        </div>
      </div>

      {/* Ingredients */}
      {/* Ingredients */}
      <div className="row" style={{ marginTop: "30px" }}>
        <h4>Ingredients:</h4>
        {/* Button */}
        <div className="col-12">
          <div className="compCardFrame">
            {/* Inside a frame with a fixed width and height */}

            <p>The end</p>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="row" style={{ marginTop: "10px", marginBottom: "5px" }}>
        <h4>Instructions:</h4>
        {/* Button */}
        <div className="col-12">
          <div className="compCardFrame">
            <p>The end</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
