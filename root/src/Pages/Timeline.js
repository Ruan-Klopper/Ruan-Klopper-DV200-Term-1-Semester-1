// Dashboard.js
import React, { useState } from "react";

// CSS
import "../css/global.css";
import "../css/Timeline.css";

// Chats.js
import "chart.js/auto";
import { Line } from "react-chartjs-2";

// Custom compoments
import NavBar from "../components/navbar";

const TimelineRecipesControl = () => {
  function clearLocalStorage() {
    // Remove the "savedRecipes" item from localStorage
    localStorage.removeItem("savedRecipes");
    // Refresh the webpage
    window.location.reload();
  }

  return (
    <div className="timelineRecipesControl">
      <h5>
        Your saved recipes will be automatically inserted into your timeline
        graph
      </h5>
      <p>
        When deleting all recipes, everything will be cleared from your saved
        recipes
      </p>
      <button className="btn btnRed" onClick={clearLocalStorage}>
        Delete all Recipes
      </button>
    </div>
  );
};

const SavedRecipeItem = ({
  recipeNo,
  recipeName,
  recipeServing,
  recipePPS,
  recipeImage,
}) => {
  return (
    <div className="timelineSavedRecipeItem">
      <div className="timelineSavedRecipeItemText">
        <p style={{ marginBottom: "5px", fontWeight: "bold" }}>
          No. {recipeNo}
        </p>
        <h6 style={{ marginBottom: "5px", fontWeight: "bold" }}>
          {recipeName}
        </h6>
        <p style={{ marginBottom: "5px" }}>Servings: {recipeServing}</p>
        <p style={{ marginBottom: "3px" }}>Price per serving: {recipePPS}</p>
      </div>
      <div
        className="timelineSavedRecipeItemPhoto"
        style={{ backgroundImage: `url(${recipeImage})` }}
      >
        <div className="timelineSavedRecipeItemPhotoOverlay"></div>
      </div>
    </div>
  );
};

const NoSavedRecipeItem = () => {
  return (
    <div className="timelineSavedRecipeItem">
      <div
        className="timelineSavedRecipeItemText"
        style={{ paddingRight: "15px" }}
      >
        <h5 style={{ marginBottom: "5px", fontWeight: "bold" }}>
          No recipes saved
        </h5>
        <p style={{ marginBottom: "5px" }}>
          Go save some recipes from the Compare page
        </p>
      </div>
    </div>
  );
};

const TimelineSavedRecipes = () => {
  const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
  //   recipeNo,
  //   recipeName,
  //   recipeServing,
  //   recipePPS,
  //   recipeImage,
  if (savedRecipes.length > 0) {
    return (
      <div
        className="timeCard timelineSavedRecipes"
        style={{ backgroundColor: "#E27209" }}
      >
        <h5 style={{ textAlign: "center" }}>All saved recipes</h5>
        <div className="timelineSavedRecipeItemContainer">
          {savedRecipes.map((element, index) => (
            <SavedRecipeItem
              key={index}
              recipeNo={index + 1}
              recipeName={element.recipeInfo.title}
              recipeServing={element.recipeInfo.servings}
              recipePPS={element.recipeInfo.pricePerServing}
              recipeImage={element.recipeInfo.imageURL}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return <NoSavedRecipeItem />;
  }
};

const NoSavedRecipeTimeline = () => {
  return (
    <div>
      <h4>No recipes saved</h4>
    </div>
  );
};

const TimelineLineGraph = () => {
  // Retrieve savedRecipes array from localStorage
  const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];

  if (savedRecipes.length === 0) {
    return <NoSavedRecipeTimeline />;
  } else {
    // Define labels (nutrient names)
    const labels = [
      "Calories",
      "Fat",
      "Carbohydrates",
      "Sugar",
      "Protein",
      "Fiber",
      "Sodium",
      "Vitamin C",
      "Potassium",
      "Iron",
    ];

    const datasets = [];

    savedRecipes.forEach((recipe, index) => {
      const nutrientData = recipe.nutritionArray.nutrients.map(
        (nutrient) => nutrient.percentOfDailyNeeds
      );

      const dataset = {
        label: `Recipe ${index + 1}`, // Add index + 1 to make labels unique
        data: nutrientData,
        borderColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
          Math.random() * 255
        }, 1)`, // Random border color for each dataset
        borderWidth: 1,
        fill: false,
      };

      datasets.push(dataset);
    });

    const data = {
      labels: labels,
      datasets: datasets,
    };

    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };

    return (
      <div className="timelineLineGraphBox">
        <Line data={data} options={options} />
      </div>
    );
  }
};

const Timeline = () => {
  return (
    <div class="website">
      <NavBar webPage={"Timeline"} />

      <div className="TimelineGroup">
        <div class="timelineLeft">
          <TimelineRecipesControl />
          <TimelineSavedRecipes />
        </div>
        <div class="timeLineRight">
          <TimelineLineGraph />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
