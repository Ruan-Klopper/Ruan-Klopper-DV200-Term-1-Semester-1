// compareResults.js
import React, { useState } from "react";
import axios from "axios";

// CSS
import "./compareCard.css";
import "../../css/global.css";

// Custom compoments
import RecipeDetails from "./compareRecipeDetails";

const CompareResults = ({ recipes }) => {
  const imageURL = "https://spoonacular.com/recipeImages/";

  const recipeTitle = recipes.title;
  const recipeImage = recipes.imageUrl;
  const recipeTime = recipes.readyInMinutes;

  // recipeID, recipeTitle, recipeImage, recipeTime
  return (
    <div>
      <div className="row ">
        {/* Results: */}
        {/* Title and photo */}
        <div
          className="row"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          <div className="col-12 recipeDetailsBlob">
            {/* background photo */}
            <div
              className="compareRecipePhotoOverlay"
              id="recipePhoto"
              style={{
                backgroundImage: `url(${imageURL}${recipeImage})`,
              }}
            ></div>
            {/* Background photo overlay */}
            <div className="compareRecipePhotoOverlayOverlay"></div>
            <div
              style={{
                paddingTop: "23px",
                paddingLeft: "15px",
                paddingRight: "80px",
              }}
            >
              {/* readyInMinutes */}
              <h6 style={{ marginBottom: "5px" }} id="readyInTime">
                Ready in <strong>{recipeTime}</strong> minutes
              </h6>
              {/* title */}
              <h4 id="recipeTitle">{recipeTitle}</h4>
              <button
                class="btn btnRed"
                type="button"
                style={{ marginTop: "8px" }}
              >
                View details
              </button>
            </div>
          </div>
        </div>
        {/* Similar controls as your previous implementation */}
      </div>

      {/* Results */}
      <div className="row" style={{ marginTop: "20px", marginBottom: "20px" }}>
        {/* Display your recipe details here */}
      </div>

      {/* Recipe deep information - will appear when a user clicks the view button */}
      {/* Recipe description */}
    </div>
  );
};

export default CompareResults;
