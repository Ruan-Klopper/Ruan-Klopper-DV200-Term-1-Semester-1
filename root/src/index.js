import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS here
import Navbar from "./compoments/navbar.js"; // Adjust the import path if needed
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <div class="website-body">
      <Navbar />
      <div class="container top-container justify-content-center">
        <div class="row">
          <h1>Your Dashboard</h1>
        </div>
        <div class="row justify-content-center">
          <div class="col-4">
            <div class="card1">
              <h3>Recipe - Food - Nutrition API </h3>
              <p>
                The spoonacular Recipe - Food - Nutrition API gives you to
                access to thousands of recipes, storebought packaged foods, and
                chain restaurant menu items. Our food ontology and semantic
                recipe search engine makes it possible to search for recipes
                using natural language queries, such as “gluten free brownies
                without sugar” or “low fat vegan cupcakes.” You can
                automatically calculate the nutritional information for any
                recipe, estimate recipe costs, visualize ingredient lists, find
                recipes for what’s in your fridge, find recipes based on special
                diets, nutritional requirements, or favorite ingredients,
                classify recipes into types and cuisines, convert ingredient
                amounts, or even compute an entire meal plan. With our powerful
                API, you can create many kinds of food and nutrition apps.
                Special diets/dietary requirements currently available include:
                vegan, vegetarian, pescetarian, gluten free, grain free, dairy
                free, high protein, low sodium, low carb, Paleo, Primal,
                ketogenic, and more.
              </p>
              <a href="https://rapidapi.com/spoonacular/api/recipe-food-nutrition/">
                Go to API
              </a>
            </div>
          </div>
          <div class="col-4">
            <div class="card1">
              <h3>Recipe - Food - Nutrition API </h3>
              <p>
                The spoonacular Recipe - Food - Nutrition API gives you to
                access to thousands of recipes,
              </p>
              <a href="https://rapidapi.com/spoonacular/api/recipe-food-nutrition/">
                Go to API
              </a>
            </div>
          </div>
          <div class="col-4">
            <div class="card1">
              <h3>Recipe - Food - Nutrition API </h3>
              <p>
                The spoonacular Recipe - Food - Nutrition API gives you to
                access to thousands of recipes,
              </p>
              <a href="https://rapidapi.com/spoonacular/api/recipe-food-nutrition/">
                Go to API
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
