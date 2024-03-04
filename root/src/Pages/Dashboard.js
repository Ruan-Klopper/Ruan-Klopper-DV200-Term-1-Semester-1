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
import DashSavedRecipe from "../components/Dashboard/dashboardSavedRecipes";

const Dashboard = () => {
  return (
    <div class="website">
      <NavBar />

      <div class="dashboardGroup">
        <h2 style={{ fontSize: "30px" }}>Your dashboard</h2>

        <div class="row">
          <div class="dashItems col-xs-12 col-sm-6 col-md-6 col-lg-4 justify-content-centre">
            <h3>Recipe - Food</h3>
            <p style={{ lineHeight: "100%" }}>
              The spoonacular Recipe - Food - Nutrition API gives you to access
              to thousands of recipes, storebought packaged foods, and chain
              restaurant menu items. Our food ontology and semantic recipe
              search engine makes it possible to search for recipes using
              natural language queries, such as “gluten free brownies without
              sugar” or “low fat vegan cupcakes.” You can automatically
              calculate the nutritional information for any recipe, estimate
              recipe costs, visualize ingredient lists, find recipes for what’s
              in your fridge, find recipes based on special diets, nutritional
              requirements, or favorite ingredients, classify recipes into types
              and cuisines, convert ingredient amounts, or even compute an
              entire meal plan. With our powerful API, you can create many kinds
              of food and nutrition apps. Special diets/dietary requirements
              currently available include: vegan, vegetarian, pescetarian,
              gluten free, grain free, dairy free, high protein, low sodium, low
              carb, Paleo, Primal, ketogenic, and more.
            </p>
            <a href="google.com">Go to API</a>
          </div>
          <div class="dashItems col-xs-12 col-sm-6 col-md-6 col-lg-4 justify-content-centre">
            <DashRecentRecipe />
          </div>
          <div class="dashItems col-xs-12 col-sm-6 col-md-6 col-lg-4 justify-content-centre">
            <DashSavedRecipe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
