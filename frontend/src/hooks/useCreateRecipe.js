import { useState } from "react";
import { createRecipe } from "@/services/recipeService";

const useCreateRecipe = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createNewRecipe = async (recipeData) => {
    setError(null);
    setLoading(true);

    try {
      const res = await createRecipe(recipeData);
      console.log(res);
      return res.data;
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  }

  return { createNewRecipe, loading, error }
}

export default useCreateRecipe;