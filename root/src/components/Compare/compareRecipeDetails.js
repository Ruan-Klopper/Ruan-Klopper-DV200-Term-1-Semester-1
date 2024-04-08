// compareRecipeDetails.js
import React, { useState, useEffect } from "react";
import axios from "axios";

// CSS
import "./compareCard.css";
import "../../css/global.css";

// Custom compoments
import IngredientItem from "./ingredientItem";
import InstructionItem from "./InstructionItem";
import CompareTaste from "./compareTaste";
import CompareNutrition from "./compareNutrition";

const NoInstructionError = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <h5>Unfortunely there are no instructions for this recipe</h5>
    </div>
  );
};

const RecipeDetails = ({ recipeDeepDetails, tasteArray, nutritionArray }) => {
  const recipeInfo = recipeDeepDetails[0];
  const healthScore = recipeDeepDetails[0].healthScore;
  const servings = recipeDeepDetails[0].servings;
  const pricePerServing = recipeDeepDetails[0].pricePerServing;
  const extendedIngredient = recipeDeepDetails[0].extendedIngredient;
  const analyzedInstructions = recipeDeepDetails[0].analyzedInstructions;
  const outputTasteArray = tasteArray;
  const outputNutritionArray = nutritionArray;

  const saveRecipe = () => {
    let savedRecipes = localStorage.getItem("savedRecipes");
    savedRecipes = savedRecipes ? JSON.parse(savedRecipes) : [];

    // Check if the recipe already exists in savedRecipes
    const isDuplicate = savedRecipes.some(
      (recipe) => recipe.recipeID === recipeInfo.id
    );

    // If it's not a duplicate, add the recipe to savedRecipes
    if (!isDuplicate) {
      savedRecipes.push({
        recipeID: recipeInfo.id,
        recipeInfo: recipeInfo,
        tasteArray: outputTasteArray,
        nutritionArray: outputNutritionArray,
      });

      localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
    } else {
      alert("Recipe already saved.");
      console.log("This recipe is already saved.");
    }
  };

  return (
    <div className="recipeDetails">
      {/* Recipe deep information - will appear when a user clicks the view button */}
      {/* Recipe description */}
      <div className="row">
        <div className="compareSavedRecipeSection">
          <h5 style={{ marginBottom: "10px" }}>
            Save your recipe so that you can view it in the timeline page:
          </h5>

          <button class="btn btnRed" type="button" onClick={saveRecipe}>
            Save
          </button>
        </div>
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
      {/* Taste */}
      <div
        className="row tasteNnutritionGroups"
        style={{ marginTop: "30px", textAlign: "center" }}
      >
        <h4>Taste</h4>
        <CompareTaste tasteArray={outputTasteArray} />
      </div>

      {/* Nutrition */}
      <div
        className="row tasteNnutritionGroups"
        style={{ marginTop: "10px", textAlign: "center" }}
      >
        <h4>Nutrition</h4>
        <CompareNutrition nutritionArray={outputNutritionArray} />
      </div>

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
            <p style={{ textAlign: "center", marginTop: "17px" }}>The end</p>
          </div>
          <div className="compCardFrameShadowOverlay"></div>
        </div>
      </div>

      {/* Instructions */}
      <div className="row" style={{ marginTop: "10px", marginBottom: "5px" }}>
        <h4>Instructions:</h4>
        <div className="col-12">
          <div className="compCardFrame">
            {analyzedInstructions.length > 0 ? (
              analyzedInstructions[0].steps.map((instructionOutput, index) => (
                <InstructionItem key={index} instruction={instructionOutput} />
              ))
            ) : (
              <NoInstructionError />
            )}
            <p style={{ textAlign: "center", marginTop: "17px" }}>The end</p>
          </div>
          <div className="compCardFrameShadowOverlay"></div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
