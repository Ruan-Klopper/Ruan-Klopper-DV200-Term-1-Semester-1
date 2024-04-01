// compareCards.js
import React, { useRef, useState } from "react";
import axios from "axios";
import ReactDOM from "react-dom";

// CSS
import "./compareCard.css";
import "../../css/global.css";

// Bootstrap compoments
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Custom compoments
import CompareResults from "./compareResults";

const LoadingElement = () => {
  return (
    <div>
      <h6 style={{ textAlign: "center" }}>Loading</h6>
    </div>
  );
};

// Define NotFoundElement component
const NotFoundElement = () => {
  return (
    <div>
      <h6 style={{ textAlign: "center" }}>Error finding your search</h6>
    </div>
  );
};

const DeafultElement = () => {
  return (
    <div>
      <h6 style={{ textAlign: "center" }}>Please search for an item</h6>
    </div>
  );
};
// Do not use reactDom, use react create root
const CompareCard = () => {
  const APIKEY = "7a92345447mshd0df87618117100p1469ddjsn05b06500b351";

  let success = false;
  let counter = 0;

  const [allRecipes, setAllRecipes] = useState([]);

  async function getRecipeDetailsByName(recipeName, calls) {
    const options = {
      method: "GET",
      url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search",
      params: {
        query: recipeName,
        number: 3,
        ranking: "2",
      },
      headers: {
        "X-RapidAPI-Key": "7a92345447mshd0df87618117100p1469ddjsn05b06500b351",
        "X-RapidAPI-Host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };

    success = false;
    try {
      const response = await axios.request(options);
      const output = response.data.results.map((element) => ({
        id: element.id,
        title: element.title,
        imageUrl: element.image,
        readyInMinutes: element.readyInMinutes,
      }));

      // If API call is successfull then register as success
      success = true;

      // initiate the allRecipes array
      setAllRecipes(output);
    } catch (error) {
      console.log("ERROR");
      console.error(error);
      success = false;
    }
  }

  const recipeDetailsContainerRef = useRef(null);

  const loadRecipes = async () => {
    const recipeName = document.getElementById("recipeNameSearch").value;

    recipeDetailsContainerRef.current.innerHTML = "";
    ReactDOM.render(<LoadingElement />, recipeDetailsContainerRef.current);

    await getRecipeDetailsByName(recipeName, 3);
    console.log("Is the API call successful?\n" + success);
    console.log("All recipes output\n", allRecipes);

    if (success && allRecipes.length > 0) {
      counter = 0; // Counter is for the previous and next thingies
      const firstRecipe = allRecipes[0];
      console.log("First recipe:", firstRecipe);

      ReactDOM.render(
        <CompareResults
          key={firstRecipe.id}
          recipeID={firstRecipe.id}
          recipeTitle={firstRecipe.title}
          recipeImage={firstRecipe.imageUrl}
          recipeTime={firstRecipe.readyInMinutes}
        />,
        recipeDetailsContainerRef.current
      );
    } else {
      console.log("No recipes found or API call failed.");
      ReactDOM.render(<NotFoundElement />, recipeDetailsContainerRef.current);
    }
  };

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
            <div className="input-group input-group-sm mb-3">
              <input
                type="text"
                className="form-control"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                id="recipeNameSearch"
              />
              <div className="input-group-append">
                <button
                  className="btn btnYellow"
                  type="button"
                  style={{ marginLeft: "8px" }}
                  onClick={loadRecipes}
                >
                  Search
                </button>
                <button
                  className="btn btnRed"
                  type="button"
                  style={{ marginLeft: "8px" }}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          {/* Search results controls, only append when the API call is successful */}
          {/* Results: */}
          {/* Title and photo */}
        </div>

        {/* Results */}
        <div
          className="row"
          style={{ marginTop: "20px" }}
          id="recipeDetailsContainer"
          ref={recipeDetailsContainerRef}
        >
          <DeafultElement />
        </div>
      </div>
    </div>
  );
};

export default CompareCard;
