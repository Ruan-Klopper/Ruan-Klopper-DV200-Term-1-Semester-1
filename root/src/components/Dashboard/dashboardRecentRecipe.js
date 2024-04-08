// dashboardRecentRecipe.js
import React from "react";

//css
import "./dashboardRecentRecipe.css";
import "../../css/Dashboard.css";

// Bootstrap compoments
const LocalStorageEmpty = () => {
  return (
    <div
      class="dashCard"
      style={{ backgroundColor: "#F2D249", marginTop: "20px" }}
    >
      <div class="dcTextGroup">
        <div>
          <h5 style={{ color: "#B42828", textAlign: "center" }}>
            No recipes saved
          </h5>
        </div>
      </div>
    </div>
  );
};

const DashRecentRecipe = () => {
  const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
  if (savedRecipes.length > 0) {
    const lastRecipe = savedRecipes.length - 1;
    const recipeImage = savedRecipes[lastRecipe].recipeInfo.imageURL;
    const recipeTitle = savedRecipes[lastRecipe].recipeInfo.title;
    return (
      <div class="dashCard" style={{ backgroundColor: "#F2D249" }}>
        <div
          class="dcPhoto"
          style={{
            backgroundImage: `url(${recipeImage})`,
          }}
        >
          <div class="dcPhotoOverlay"></div>
        </div>
        <div class="dcTextGroup">
          <div>
            <h5 style={{ color: "#B42828" }}>Most recent recipe</h5>
            <h3 id="dcRecipeName" style={{ color: "#B42828" }}>
              {recipeTitle}
            </h3>
          </div>
        </div>
      </div>
    );
  } else {
    return <LocalStorageEmpty />;
  }
};

export default DashRecentRecipe;
