// compareResults.js
import React, { useState } from "react";
import axios from "axios";

// CSS
import "./compareCard.css";
import "../../css/global.css";

// Custom compoments
import RecipeDetails from "./compareRecipeDetails";

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

const CompareResults = ({ recipes }) => {
  const imageURL = "https://spoonacular.com/recipeImages/";

  const [hasRecipeDetails, setHasRecipeDetails] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorCode, setErrorCode] = useState("");
  const [viewState, setViewState] = useState(false);
  const [viewStateBtn, setViewStateBtnTxt] = useState("View details");
  const [allDetailedRecipes, setAllDetailedRecipes] = useState([]);
  const [tasteArray, setTasteArray] = useState([]);
  const [nutritionArray, setNutritionArray] = useState([]);

  const recipeTitle = recipes.title;
  const recipeImage = recipes.imageUrl;
  const recipeTime = recipes.readyInMinutes;
  const recipeID = recipes.id;

  // API call for getRecipeInformationByID
  async function getRecipeInformationByID() {
    const options = {
      method: "GET",
      url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk",
      params: { ids: recipeID },
      headers: {
        "X-RapidAPI-Key": "7a92345447mshd0df87618117100p1469ddjsn05b06500b351",
        "X-RapidAPI-Host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      // If succesfull do this
      console.log("Response data from 2nd API call: \n", response.data[0]);

      console.log("RAW API DATA:\n");
      const fetchedData = response.data.map((element) => ({
        healthScore: element.healthScore,
        servings: element.servings,
        pricePerServing: element.pricePerServing,
        extendedIngredient: element.extendedIngredients,
        analyzedInstructions: element.analyzedInstructions,
        instructionsString: element.instructions,
        id: element.id,
      }));

      console.log("FetchedDATA: \n", fetchedData);
      console.log("getRecipeInformationByID CALLED");

      return fetchedData;
    } catch (error) {
      console.error(error);
      // If failed do this
      return null;
    }
  }

  // API call for getTasteInformationByID
  async function getTasteInformationByID() {
    const options = {
      method: "GET",
      url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeID}/tasteWidget.json`,
      params: { normalize: "false" },
      headers: {
        "X-RapidAPI-Key": "7a92345447mshd0df87618117100p1469ddjsn05b06500b351",
        "X-RapidAPI-Host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log("getTasteInformationByID CALLED");
      console.log("TasteArray response:\n", response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async function getNutritionInfoByID() {
    const options = {
      method: "GET",
      url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeID}/nutritionWidget.json`,
      headers: {
        "X-RapidAPI-Key": "7a92345447mshd0df87618117100p1469ddjsn05b06500b351",
        "X-RapidAPI-Host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log("Nutrition data:\n", response.data);
      console.log("Nutrition data nutrition:\n", response.data.nutrients);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  // Load recipes onto the DOM
  const loadRecipeDetails = async () => {
    if (viewState === false) {
      // Loading
      setIsLoading(true);
      setHasRecipeDetails(false);
      setHasError(false);

      setAllDetailedRecipes([]);
      const recipeInfo = await getRecipeInformationByID();
      const tasteInfo = await getTasteInformationByID();
      const nutritionInfo = await getNutritionInfoByID();

      console.log("AllDetailedRecipes array \n", allDetailedRecipes);

      if (recipeInfo && recipeInfo.length > 0) {
        // Sucessfull API CALL
        setIsLoading(false);
        setHasRecipeDetails(true);
        setHasError(false);

        setAllDetailedRecipes(recipeInfo);
        setTasteArray(tasteInfo);
        setNutritionArray(nutritionInfo);

        // States
        setViewState(true);
        setViewStateBtnTxt("Hide details");
      } else {
        // Unsucessfull API CALL
        setIsLoading(false);
        setHasRecipeDetails(false);
        setHasError(true);
        setErrorCode(
          "Error: Haven't recieved anything into the allDetailedRecipes Array"
        );

        setViewState(true);
        setViewStateBtnTxt("Hide details");
      }
    } else {
      setIsLoading(false);
      setHasRecipeDetails(false);
      setHasError(false);

      setViewState(false);
      setViewStateBtnTxt("Show details");
    }
  };

  let displayTime;

  if (recipeTime >= 60) {
    const hours = Math.floor(recipeTime / 60);
    const minutes = recipeTime % 60;
    displayTime = `${hours} hour${hours > 1 ? "s" : ""} ${minutes} minute${
      minutes > 1 ? "s" : ""
    }`;
  } else {
    displayTime = `${recipeTime} minute${recipeTime > 1 ? "s" : ""}`;
  }

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
                Ready in <strong>{displayTime}</strong>
              </h6>
              {/* title */}
              <h4 id="recipeTitle">{recipeTitle}</h4>
              <button
                class="btn btnRed"
                type="button"
                style={{ marginTop: "8px" }}
                onClick={loadRecipeDetails}
              >
                {viewStateBtn}
              </button>
            </div>
          </div>
        </div>
        {/* Similar controls as your previous implementation */}
      </div>

      {/* Results */}
      <div className="row" style={{ marginTop: "20px", marginBottom: "15px" }}>
        {/* Display your recipe details here */}
        {hasRecipeDetails && (
          <RecipeDetails
            recipeDeepDetails={allDetailedRecipes}
            tasteArray={tasteArray}
            nutritionArray={nutritionArray}
          />
        )}
        {hasError && <NotFoundElement errorMessage={errorCode} />}
        {isLoading && <LoadingElement />}
      </div>
    </div>
  );
};

export default CompareResults;
