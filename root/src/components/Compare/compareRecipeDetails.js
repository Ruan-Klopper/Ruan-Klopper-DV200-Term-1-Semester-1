// compareRecipeDetails.js
import React, { useState, useEffect } from "react";
import axios from "axios";

// CSS
import "./compareCard.css";
import "../../css/global.css";

// Bootstrap compoments
import IngredientItem from "./ingredientItem";
import InstructionItem from "./InstructionItem";
// Custom compoments

const RecipeDetails = ({ recipeDeepDetails }) => {
  const healthScore = recipeDeepDetails[0].healthScore;
  const servings = recipeDeepDetails[0].servings;
  const pricePerServing = recipeDeepDetails[0].pricePerServing;
  const extendedIngredient = recipeDeepDetails[0].extendedIngredient;
  const analyzedInstructionsSteps =
    recipeDeepDetails[0].analyzedInstructions[0].steps;

  console.log("analyzedInstructionsSteps:\n", analyzedInstructionsSteps);

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
          <h1>{healthScore}</h1>
        </div>

        <div
          className="scoreGummy col-4"
          style={{ backgroundColor: "#E27209", color: "#F2D249" }}
        >
          <p style={{ marginBottom: "2px" }}>Servings</p>
          <h1>{servings}</h1>
        </div>

        <div
          className="scoreGummy col-4"
          style={{ backgroundColor: "#B42828", color: "#F2D249" }}
        >
          <p style={{ marginBottom: "2px" }}>Price per serving</p>
          <h4>{pricePerServing}</h4>
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
          {/* Ingredient item container */}
          <div className="compCardFrame" id="ingredientsContainer">
            {extendedIngredient.map((ingredient, index) => (
              <IngredientItem index={index} ingredient={ingredient} />
            ))}

            <IngredientItem index={0} ingredient={extendedIngredient[0]} />
            <p style={{ textAlign: "center", marginTop: "17px" }}>The end</p>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="row" style={{ marginTop: "10px", marginBottom: "5px" }}>
        <h4>Instructions:</h4>
        <div className="col-12">
          <div className="compCardFrame">
            {analyzedInstructionsSteps.map((instructionOutput, index) => (
              <InstructionItem instruction={instructionOutput} />
            ))}
            <p style={{ textAlign: "center", marginTop: "17px" }}>The end</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
