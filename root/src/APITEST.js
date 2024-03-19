import axios from "axios";

const options = {
  method: "GET",
  url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search",
  params: {
    query: "burger", // Dishname
    number: "69", // number of recipes to output
    offset: "0",
  },
  headers: {
    "X-RapidAPI-Key": "7a92345447mshd0df87618117100p1469ddjsn05b06500b351",
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

  console.log("Run code")

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
