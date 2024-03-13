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
import DashStats from "../components/Dashboard/dashboardStats";
import BarChart from "../components/charts/barChart";
import LineChart from "../components/charts/lineChart";
import PieChart from "../components/charts/pieChart";

const Dashboard = () => {
  return (
    <div class="website">
      <NavBar webPage={"Dashboard"} />

      <div class="dashboardGroup">
        <h2 style={{ fontSize: "30px" }}>Your dashboard</h2>

        <div class="row">
          <div class="dashItems col-xs-12 col-sm-6 col-md-6 col-lg-4 justify-content-centre">
            <h3>Recipe - Food</h3>
            <p>
              The spoonacular Recipe - Food - Nutrition API offers access to a
              vast array of recipes, packaged foods, and restaurant menu items.
              Its advanced food ontology and semantic recipe search engine allow
              for natural language queries, such as "gluten-free brownies
              without sugar" or "low-fat vegan cupcakes." Users can calculate
              nutritional information, estimate costs, visualize ingredients,
              find recipes based on dietary preferences or ingredients on hand,
              and more. The API supports various special diets, including vegan,
              vegetarian, gluten-free, and ketogenic, among others, enabling the
              creation of diverse food and nutrition apps.
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

        <div class="row">
          <div class="dashItems col-xs-12 col-sm-6 col-md-6 col-lg-4 justify-content-centre">
            <DashStats chart={<BarChart />} />
          </div>
          <div class="dashItems col-xs-12 col-sm-6 col-md-6 col-lg-4 justify-content-centre">
            <DashStats chart={<PieChart />} />
          </div>
          <div class="dashItems col-xs-12 col-sm-6 col-md-6 col-lg-4 justify-content-centre">
            <DashStats chart={<LineChart />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
