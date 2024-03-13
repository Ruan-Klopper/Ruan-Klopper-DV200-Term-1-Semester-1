// compareCards.js
import React from "react";

// CSS
import "./compareCard.css";
import "../../css/global.css";

// Bootstrap compoments
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Custom compoments
import RecipeDetails from "./compareRecipeDetails";

const CompareCard = ({ recipeNo }) => {
  // recipeNo

  // recipeData array structure
  // property name - dataset - which ID tag it goes to
  // API Call: Search Recipes
  // readyInMinutes - int - #readyInTime
  // title - string - #recipeTitle
  // imageUrls - string - #recipePhoto

  return (
    <div className="compCard">
      <div className="container">
        {/* Top */}
        <div className="row">
          <h3>Recipe</h3>
          <div className="compCardRemoveBtn"></div>
        </div>

        {/* Search for a recipe */}
        <div className="row" style={{ marginTop: "15px" }}>
          <div className="col-12">
            <h5>Search for a recipe</h5>
          </div>
          <div className="col-12">
            {/* Search box with button */}
            <div class="input-group input-group-sm mb-3">
              <input
                type="text"
                class="form-control"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              ></input>
              <div class="input-group-append">
                <button
                  class="btn btnYellow"
                  type="button"
                  style={{ marginLeft: "8px" }}
                >
                  Search
                </button>
                <button
                  class="btn btnRed"
                  type="button"
                  style={{ marginLeft: "8px" }}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
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
              Ready in time
            </h6>
            {/* title */}
            <h3 id="recipeTitle">Eggs and bullybeef</h3>
            <button
              class="btn btnYellow"
              type="button"
              style={{ marginTop: "8px" }}
            >
              View details
            </button>
          </div>
          <div className="col-5">
            {/* Recipe photo appear here */}
            <div className="compRecipePhoto" id="recipePhoto"></div>
          </div>
        </div>

        {/* Recipe deep information - will appear when a user clicks the view button */}
        {/* Recipe description */}
        <RecipeDetails id={245} />
      </div>
    </div>
  );
};

export default CompareCard;
