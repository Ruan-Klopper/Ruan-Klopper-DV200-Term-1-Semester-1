// Dashboard.js
import React from "react";

// CSS
import "../css/global.css";
import "../css/Dashboard.css";

// Bootstrap compoments
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Custom compoments
import NavBar from "../components/navbar";
import DashRecentRecipe from "../components/Dashboard/dashboardRecentRecipe";
import DashStats from "../components/Dashboard/dashboardStats";
import BarChart from "../components/charts/barChart";
import LineChart from "../components/charts/lineChart";
import PieChart from "../components/charts/pieChart";

const DashAPIdescription = () => {
  return (
    <div className="dashCard dashCardAPIdesc" style={{ padding: "20px" }}>
      <h3>Recipe - Food</h3>
      <p>
        The spoonacular Recipe - Food - Nutrition API offers access to a vast
        array of recipes, packaged foods, and restaurant menu items. Its
        advanced food ontology and semantic recipe search engine allow for
        natural language queries, such as "gluten-free brownies without sugar"
        or "low-fat vegan cupcakes." Users can calculate nutritional
        information, estimate costs, visualize ingredients, find recipes based
        on dietary preferences or ingredients on hand, and more. The API
        supports various special diets, including vegan, vegetarian,
        gluten-free, and ketogenic, among others, enabling the creation of
        diverse food and nutrition apps.
      </p>
      <p style={{ textAlign: "center" }}>
        <a href="google.com" style={{ color: "#f2d249" }}>
          Go to API
        </a>
      </p>
    </div>
  );
};

const DashboardCredits = () => {
  return (
    <div
      className="dashCardSmall"
      style={{ backgroundColor: "#F5F5F5", padding: "15px" }}
    >
      <h4
        style={{
          marginBottom: "15px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Credits
      </h4>
      <p style={{ marginBottom: "0px" }}>
        Application built with React.js, Charts.js, AXIOS, HTML 5, CSS and
        JavaScript.
      </p>
      <p style={{ marginBottom: "10px" }}>API: Recipe Food Nutrition API </p>
      <h5 style={{ marginBottom: "0px" }}>Coded and developed by:</h5>
      <p style={{ marginBottom: "0px" }}>Ruan Klopper 231280</p>
      <p style={{ marginBottom: "0px" }}>Interactive Development 200 Term 1</p>
      <p style={{ marginBottom: "0px" }}>Date of submission: 7 April 2024</p>
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
    <div className="dashboardSavedRecipeItem">
      <div className="dashboardSavedRecipeItemText">
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
        className="dashboardSavedRecipeItemPhoto"
        style={{ backgroundImage: `url(${recipeImage})` }}
      >
        <div className="dashboardSavedRecipeItemPhotoOverlay"></div>
      </div>
    </div>
  );
};

const NoSavedRecipeItem = () => {
  return (
    <div className="dashboardSavedRecipeItem">
      <div
        className="dashboardSavedRecipeItemText"
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

const DashboardSavedRecipes = () => {
  const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];
  //   recipeNo,
  //   recipeName,
  //   recipeServing,
  //   recipePPS,
  //   recipeImage,
  if (savedRecipes.length > 0) {
    return (
      <div
        className="dashCard dashboardSavedRecipes"
        style={{ backgroundColor: "#E6E6E6" }}
      >
        <h5 style={{ textAlign: "center" }}>All saved recipes</h5>
        <div className="dashboardSavedRecipeItemContainer">
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

const Dashboard = () => {
  return (
    <div class="website">
      <NavBar webPage={"Dashboard"} />

      <div class="dashboardGroup">
        <h2
          style={{
            fontSize: "30px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Your dashboard
        </h2>

        <div class="row">
          <div class="dashItems col-xs-12 col-sm-6 col-md-6 col-lg-4 justify-content-center">
            <DashAPIdescription />
          </div>
          <div class="dashItems col-xs-12 col-sm-6 col-md-6 col-lg-4 justify-content-center">
            <DashRecentRecipe />
          </div>
          <div class="dashItems col-xs-12 col-sm-6 col-md-6 col-lg-4 justify-content-center">
            <DashboardSavedRecipes />
          </div>
          <div class="dashItems col-xs-12 col-sm-6 col-md-6 col-lg-4 justify-content-center">
            <DashboardCredits />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
