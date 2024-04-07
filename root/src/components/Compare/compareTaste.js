import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";

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

const CompareTaste = ({ tasteArray }) => {
  const limitedTasteArray = Object.keys(tasteArray).reduce((acc, key) => {
    acc[key] = Math.min(tasteArray[key] || 0, 100);
    return acc;
  }, {});

  const data = {
    labels: [
      "Sweetness",
      "Saltiness",
      "Sourness",
      "Bitterness",
      "Savoriness",
      "Fattiness",
      "Spiciness",
    ],
    datasets: [
      {
        label: "Taste",
        data: [
          limitedTasteArray.sweetness || 0,
          limitedTasteArray.saltiness || 0,
          limitedTasteArray.sourness || 0,
          limitedTasteArray.bitterness || 0,
          limitedTasteArray.savoriness || 0,
          limitedTasteArray.fattiness || 0,
          limitedTasteArray.spiciness || 0,
        ],
        backgroundColor: [
          "rgba(242, 210, 73, 1)", // yellow
          "rgba(226, 114, 9, 1)", // orange
          "rgba(180, 40, 40, 1)", // red
          "rgba(242, 210, 73, 1)", // yellow
          "rgba(226, 114, 9, 1)", // orange
          "rgba(180, 40, 40, 1)", // red
          "rgba(242, 210, 73, 1)", // yellow
        ],
        borderColor: [
          "rgba(242, 210, 73, 1)", // yellow
          "rgba(226, 114, 9, 1)", // orange
          "rgba(180, 40, 40, 1)", // red
          "rgba(242, 210, 73, 1)", // yellow
          "rgba(226, 114, 9, 1)", // orange
          "rgba(180, 40, 40, 1)", // red
          "rgba(242, 210, 73, 1)", // yellow
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
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
      tooltip: {
        bodyFont: {
          family: "Yanone Kaffeesatz, sans-serif",
          style: "normal",
        },
      },
    },
  };

  return (
    <div
      className="comparePieGraph"
      // style={{ width: "138px", height: "138px" }}
    >
      <Pie data={data} options={options} />
    </div>
  );
};

export default CompareTaste;
