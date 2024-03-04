// dashboardRecentRecipe.js
import React from "react";

//css
import "./dashboardRecentRecipe.css";

// Bootstrap compoments

const DashRecentRecipe = () => {
  return (
    <div class="dashCard">
      <div class="dcPhoto" id="dcPhoto">
        <div class="dcPhotoOverlay"></div>
      </div>
      <div class="dcTextGroup">
        <h5 style={{ color: "#B42828" }}>Most recent recipe</h5>
        <h3 id="dcRecipeName" style={{ color: "#B42828" }}>
          RecipeName
        </h3>
        <h5 id="dcRecipeDescription" style={{ color: "#B42828" }}>
          The quick brown fox jumps over the lazy dog.
        </h5>
      </div>
      <div class="innerShadow"></div>
    </div>
  );
};

export default DashRecentRecipe;
