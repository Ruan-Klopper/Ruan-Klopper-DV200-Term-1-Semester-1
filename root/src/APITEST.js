const axios = require("axios");
const APIKEY = "7a92345447mshd0df87618117100p1469ddjsn05b06500b351";

async function getRecipeDetailsByName(recipeName, calls) {
  let outputData = [];

  const options = {
    method: "GET",
    url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch",
    params: {
      query: recipeName,
      number: calls,
      ranking: "2",
    },
    headers: {
      "X-RapidAPI-Key": APIKEY,
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    const output = response.data.results; // Use response.data instead of data

    for (let i = 0; i < output.length; i++) {
      const element = output[i];
      outputData.push({
        id: element.id,
        title: element.title,
        imageUrl: element.image,
      });
      console.log("Output data array:\n" + outputData);
    }
  } catch (error) {
    console.error(error);
  }

  return outputData; // Return the output data
}

async function getRecipeInformationByID(id) {
  const options = {
    method: "GET",
    url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk",
    params: { ids: id },
    headers: {
      "X-RapidAPI-Key": APIKEY,
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    // When successfull do this:
    console.log(response.data);
  } catch (error) {
    console.error(error);
    // If failed do this
  }
}

async function getRecipeInformationByID2(id) {
  const options = {
    method: "GET",
    url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk",
    params: { ids: id },
    headers: {
      "X-RapidAPI-Key": "7a92345447mshd0df87618117100p1469ddjsn05b06500b351",
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    // If succesfull do this
    const outputData = response.data[0];
  } catch (error) {
    console.error(error);
    // If failed do this
  }
}

const getTasteByID = async ({ recipeID }) => {
  const options = {
    method: "GET",
    url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeID}/tasteWidget.json`,
    params: { normalize: "false" },
    headers: {
      "X-RapidAPI-Key": "7a92345447mshd0df87618117100p1469ddjsn05b06500b351",
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

getTasteByID({ recipeID: 67767 });
