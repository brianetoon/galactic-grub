import axios from "axios";

const API_URL = "http://localhost:3000/api/recipes"; 

export const fetchRecipes = async () => {
  try {
    const response = await axios.get(API_URL);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};
