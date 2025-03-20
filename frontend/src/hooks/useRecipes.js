import { useState, useEffect } from "react";
import { fetchRecipes } from "@/services/recipeService";

const useRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRecipes = async () => {
      setError(null);
      setLoading(true);

      try {
        const res = await fetchRecipes();
        console.log(res.data);
        setRecipes(res.data);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getRecipes();
  }, []);

  return { recipes, loading, error };
};

export default useRecipes;