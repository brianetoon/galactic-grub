import axios from "axios";
import useAuthStore from "@/store/useAuthStore";

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

export const createRecipe = async (recipeData) => {
  try {
    const response = await axios.post(API_URL, recipeData, {
      headers: {
        // If needed, add authorization headers (e.g., for user authentication)
        // Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error posting recipe:", error);
    throw error; 
  }
};