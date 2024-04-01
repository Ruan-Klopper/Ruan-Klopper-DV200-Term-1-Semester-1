// compareResults.js
import React, { useState } from "react";
import axios from "axios";

// CSS
import "./compareCard.css";
import "../../css/global.css";

// Bootstrap compoments
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Custom compoments
import RecipeDetails from "./compareRecipeDetails";

const CompareResults = ({ recipeID, recipeTitle, recipeImage, recipeTime }) => {
  const imageURL = "https://spoonacular.com/recipeImages/";

  return (
    <div>
      <div className="row">
        {/* Search results controls, only append when the API call is successful */}
        <div className="col-12">
          <h5 style={{ float: "left", marginTop: "8px" }}>
            <strong>Search results:</strong>
          </h5>
          <button
            class="btn btnRed"
            type="button"
            style={{ marginLeft: "5px", float: "right" }}
          >
            Previous
          </button>
          <button
            class="btn btnRed"
            type="button"
            style={{ marginLeft: "5px", float: "right" }}
          >
            Next
          </button>
        </div>
        {/* Results: */}
        {/* Title and photo */}
        <div
          className="row"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          <div className="col-7">
            {/* readyInMinutes */}
            <h6 style={{ marginBottom: "5px" }} id="readyInTime">
              Ready in {recipeTime}
            </h6>
            {/* title */}
            <h3 id="recipeTitle">{recipeTitle}</h3>
            <button
              class="btn btnYellow"
              type="button"
              style={{ marginTop: "8px" }}
            >
              View details
            </button>
          </div>
          <div className="col-5">
            <div
              className="compRecipePhoto"
              id="recipePhoto"
              style={{
                backgroundImage: `url(${imageURL}${recipeImage})`,
              }}
            ></div>
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
