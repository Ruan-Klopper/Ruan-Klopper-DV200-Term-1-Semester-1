// dashboardRecentRecipe.js
import React from "react";

//css
import "./dashboardRecentRecipe.css";
import "../../css/Dashboard.css";

// Bootstrap compoments

const DashRecentRecipe = () => {
  return (
    <div class="dashCard" style={{ backgroundColor: "#F2D249" }}>
      <div class="dcPhoto" id="dcPhoto">
        <div class="dcPhotoOverlay"></div>
      </div>
      <div class="dcTextGroup">
        <div>
          <h5 style={{ color: "#B42828" }}>Most recent recipe</h5>
          <h4 id="dcRecipeName" style={{ color: "#B42828" }}>
            RecipeName
          </h4>
        </div>
      </div>
    </div>
  );
};

export default DashRecentRecipe;
