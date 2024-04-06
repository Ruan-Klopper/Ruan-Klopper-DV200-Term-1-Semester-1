// compareCards.js
import React, { useRef, useState } from "react";
import axios from "axios";
import ReactDOM from "react-dom";

// CSS
import "./compareCard.css";
import "../../css/global.css";

// Custom compoments
import CompareResults from "./compareResults";

const SearchControls = ({ count, total, loadPrev, loadNext }) => {
  // Receive loadPrev and loadNext as props
  return (
    /* Search results controls, only append when the API call is successful */
    <div className="col-12">
      <h5 style={{ float: "left", marginTop: "8px" }}>
        <strong>
          Search results: {count + 1}/{total}{" "}
        </strong>
      </h5>
      <button
        className="btn btnRed" // Corrected class attribute name
        type="button"
        style={{ marginLeft: "5px", float: "right" }}
        onClick={loadNext} // Call loadNext directly without parentheses
      >
        Next
      </button>
      <button
        className="btn btnRed" // Corrected class attribute name
        type="button"
        style={{ marginLeft: "5px", float: "right" }}
        onClick={loadPrev} // Call loadPrev directly without parentheses
      >
        Previous
      </button>
    </div>
  );
};

const LoadingElement = () => {
  return (
    <div>
      <div className="loadingGif"></div>
      <h6 style={{ textAlign: "center" }}>Loading...</h6>
    </div>
  );
};

const NotFoundElement = ({ errorMessage }) => {
  return (
    <div>
      <div className="errorGif"></div>
      <h6 style={{ textAlign: "center" }}>{errorMessage}</h6>
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

const CompareCard = () => {
  const APIKEY = "7a92345447mshd0df87618117100p1469ddjsn05b06500b351";

  const [recipeName, setRecipeName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [hasRecipes, setHasRecipes] = useState(false);
  const [allRecipes, setAllRecipes] = useState([]);
  const [counter, setCounter] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [errorCode, setErrorCode] = useState("");

  let success = false;

  async function getRecipeDetailsByName(recipeName, calls) {
    const options = {
      method: "GET",
      url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search",
      params: {
        query: recipeName,
        number: calls,
        ranking: "2",
      },
      headers: {
        "X-RapidAPI-Key": "7a92345447mshd0df87618117100p1469ddjsn05b06500b351",
        "X-RapidAPI-Host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      const fetchedRecipes = response.data.results.map((element) => ({
        id: element.id,
        title: element.title,
        imageUrl: element.image,
        readyInMinutes: element.readyInMinutes,
      }));

      // Save recipes to ALLRECIPES ARRAY
      console.log("API OUTPUT:");
      console.log(fetchedRecipes);
      setAllRecipes(await fetchedRecipes);
      success = true;
    } catch (error) {
      console.error("ERROR: " + error);
      success = false;
      setErrorCode("Seems like we can't find that recipe - Error code:", error);
    }
  }

  const loadRecipes = async () => {
    // State for loading
    setIsLoading(true);
    setHasRecipes(false);
    setHasError(false);

    setAllRecipes([]);
    await getRecipeDetailsByName(recipeName, 10);

    console.log("Recipe name trying to seach for:" + recipeName);
    console.log("Is the API call successful?\n" + success);
    console.log("All recipes output\n", allRecipes);

    if (allRecipes.length > 0) {
      // Load recipes
      setCounter(0);
      setTotalCount(allRecipes.length);

      // State for adding a recipe element
      setIsLoading(false);
      setHasRecipes(true);
      setHasError(false);
    } else {
      setErrorCode(
        "Seems like we can't find that recipe - Try again, if it does not work then the Recipe not found - What caused it? Nothing recieved from the API :("
      );
      setIsLoading(false);
      setHasRecipes(false);
      setHasError(true);
    }
  };

  const loadNext = () => {
    setCounter((prevCounter) => (prevCounter + 1) % totalCount);
    setIsLoading(false);
    setHasRecipes(true);
    setHasError(false);
  };

  const loadPrev = () => {
    setCounter((prevCounter) => (prevCounter - 1 + totalCount) % totalCount);
    setIsLoading(false);
    setHasRecipes(true);
    setHasError(false);
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
                style={{
                  borderColor: "#E27209",
                  borderRadius: "10px",
                }}
                value={recipeName}
                onChange={(e) => setRecipeName(e.target.value)}
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
        </div>

        {/* Results */}
        <div className="row" style={{ marginTop: "20px" }}>
          {isLoading && <LoadingElement />}
          {hasError && <NotFoundElement errorMessage={errorCode} />}
          {hasRecipes && (
            <>
              <SearchControls
                count={counter}
                total={totalCount}
                loadPrev={loadPrev} // Pass loadPrev as prop
                loadNext={loadNext} // Pass loadNext as prop
              />
              <CompareResults
                recipes={allRecipes[counter]} // Pass the retrieved recipes to CompareResults
              />
            </>
          )}
          {!isLoading && !hasError && !hasRecipes && <DeafultElement />}
        </div>
      </div>
    </div>
  );
};

export default CompareCard;
