import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

// CSS
import "./compareGraphs.css";
import "../../css/global.css";

const GraphsError = ({ errorCode }) => {
  return (
    <div>
      <h4>Unfortunately, the Graphs are unavailable at this moment:</h4>
      <h6>Error: {errorCode}</h6>
    </div>
  );
};

// Calories: Provides information about the energy content of the food.
// Fat: Indicates the amount of fat present in the food.
// Carbohydrates: Shows the quantity of carbohydrates in the food.
// Sugar: Provides information about the amount of sugar present.
// Protein: Indicates the protein content of the food.
// Fiber: Shows the dietary fiber content.
// Sodium: Indicates the amount of sodium present.
// Vitamin C: Provides information about the vitamin C content.
// Potassium: Shows the quantity of potassium in the food.
// Iron: Indicates the iron content.

const CompareNutrition = ({ nutritionArray }) => {
  const nutritionData = nutritionArray;

  const Calories = nutritionData.nutrients[0].percentOfDailyNeeds;
  const Fat = nutritionData.nutrients[1].percentOfDailyNeeds;
  const Carbohydrates = nutritionData.nutrients[3].percentOfDailyNeeds;
  const Sugar = nutritionData.nutrients[5].percentOfDailyNeeds;
  const Protein = nutritionData.nutrients[9].percentOfDailyNeeds;
  const Fiber = nutritionData.nutrients[19].percentOfDailyNeeds;
  const Sodium = nutritionData.nutrients[7].percentOfDailyNeeds;
  const VitaminC = nutritionData.nutrients[10].percentOfDailyNeeds;
  const Potassium = nutritionData.nutrients[12].percentOfDailyNeeds;
  const Iron = nutritionData.nutrients[20].percentOfDailyNeeds;

  const data = {
    labels: [
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
    ],
    datasets: [
      {
        label: "Daily nutrition",
        data: [
          Calories,
          Fat,
          Carbohydrates,
          Sugar,
          Protein,
          Fiber,
          Sodium,
          VitaminC,
          Potassium,
          Iron,
        ],
        backgroundColor: "rgba(226, 114, 9, 1)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
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
    plugins: {
      legend: {
        labels: {
          font: {
            family: "Yanone Kaffeesatz, sans-serif",
            opticalSizing: "auto",
            style: "normal",
          },
        },
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default CompareNutrition;
